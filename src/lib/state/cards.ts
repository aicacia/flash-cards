import Automerge from "automerge";
import { createStore } from "./store";

function createText(defaultText = "") {
  const text = new Automerge.Text();
  text.insertAt && text.insertAt(0, defaultText);
  return text;
}

export interface ICard {
  deckId: string;
  front: Automerge.Text;
  back: Automerge.Text;
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
      front: createText("Front"),
      back: createText("Back"),
      deckId,
      createdAt: now,
      updatedAt: now,
    });
  }, `Create Card for Deck ${deckId}`);
  return id;
}

export function updateCardFront(
  id: string,
  updater: (front: Automerge.Text) => Automerge.Text
) {
  cardStore.update((state) => {
    const row = state.table.byId(id);
    row.front = updater(row.front);
    row.updatedAt = new Date().toJSON();
  }, `Update Card ${id} front`);
}

export function updateCardBack(
  id: string,
  updater: (front: Automerge.Text) => Automerge.Text
) {
  cardStore.update((state) => {
    const row = state.table.byId(id);
    row.back = updater(row.back);
    row.updatedAt = new Date().toJSON();
  }, `Update Card ${id} back`);
}

export function deleteCard(id: string) {
  cardStore.update((state) => {
    state.table.remove(id);
  }, `Delete Card ${id}`);
}

import { deckStore } from "./decks";
