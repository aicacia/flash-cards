import { debounce } from "@aicacia/debounce";
import Automerge from "automerge";
import type { Delta } from "typewriter-editor";
import { createStore } from "./store";

export interface ICard {
  deckId: string;
  front?: Delta;
  back?: Delta;
  createdAt: string;
  updatedAt: string;
}

export const cardStore = createStore("cards", {
  table: new Automerge.Table<ICard>(),
});

export function createCard(deckId: string) {
  if (!deckStore.getState().table.byId(deckId)) {
    throw new Error(`No deck ${deckId} found`);
  }
  let id: string | undefined;
  cardStore.update((state) => {
    const now = new Date().toJSON();
    id = state.table.add({
      deckId,
      createdAt: now,
      updatedAt: now,
    });
  }, `Create Card for Deck ${deckId}`);
  return id;
}

export function updateCard(
  id: string,
  updater: (row: ICard & Automerge.TableRow) => void
) {
  cardStore.update((state) => {
    const row = state.table.byId(id);
    updater(row);
    row.updatedAt = new Date().toJSON();
  }, `Update Card ${id} front`);
}

export const debounceUpdateCard = debounce(updateCard, 1000);

export function deleteCard(id: string) {
  cardStore.update((state) => {
    state.table.remove(id);
  }, `Delete Card ${id}`);
}

import { deckStore } from "./decks";
