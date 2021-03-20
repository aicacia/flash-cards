import { debounce } from "@aicacia/debounce";
import Automerge from "automerge";
import { forage } from "@tauri-apps/tauri-forage";
import { writable } from "svelte/store";
import { getNodeId } from "./nodeId";

const DEFAULT_TIMEOUT = 1000;

export interface IStoreOptions {
  timeout?: number;
}

export class Store<T> {
  private name: string;
  private state: Automerge.FreezeObject<T>;
  private debouncedPersist: () => void;
  private subscriptions: Array<(state: Automerge.FreezeObject<T>) => void> = [];

  constructor(name: string, state: Automerge.FreezeObject<T>, timeout: number) {
    this.name = name;
    this.state = state;
    this.debouncedPersist = debounce(() => this.persist(), timeout);
  }

  async persist() {
    await forage.setItem({
      key: this.name,
      value: Automerge.save(this.state),
    })();
  }

  getState() {
    return this.state;
  }

  private emit(state: Automerge.FreezeObject<T>) {
    const subscriptions = this.subscriptions.slice();
    for (const subscription of subscriptions) {
      subscription(state);
    }
    return this;
  }

  getDiff(server: Automerge.FreezeObject<T>) {
    const merged = Automerge.merge(this.state, server);
    const diff = Automerge.diff(server, merged);
    return diff;
  }

  setState(state: Automerge.FreezeObject<T>) {
    this.state = state;
    this.emit(state);
    this.debouncedPersist();
    return this;
  }

  update(updater: (current: T) => void, action = "") {
    this.setState(Automerge.change(this.state, action, updater));
    return this;
  }

  subscribe(
    subscription: (value: Automerge.FreezeObject<T>) => void
  ): () => void {
    this.subscriptions.push(subscription);
    subscription(this.state);
    return () => {
      const index = this.subscriptions.indexOf(subscription);
      if (index === -1) {
        this.subscriptions.splice(index, 1);
      }
    };
  }
}

export function createStore<T>(
  name: string,
  initialState: T,
  timeout = DEFAULT_TIMEOUT
) {
  const store = new Store<T>(
    name,
    Automerge.from<T>(initialState, getNodeId()),
    timeout
  );

  forage
    .getItem({ key: name })()
    .then((storedValue) => {
      if (storedValue) {
        store.setState(Automerge.load<T>(storedValue, getNodeId()));
      }
    });

  return store;
}
