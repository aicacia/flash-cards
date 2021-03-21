<script context="module" lang="ts">
  export async function load(request: {
    page: { params: { deckId: string } };
  }) {
    return {
      props: request.page.params,
    };
  }
</script>

<script lang="ts">
  import Display from "$lib/Display.svelte";
  import { createCard, deleteCard, cardStore } from "$lib/state/cards";
  import { deckStore, updateDeckDebounced } from "$lib/state/decks";

  export let deckId: string;

  $: deck = $deckStore.table.byId(deckId);
  let loaded = false;
  let name: string;
  let deleteCardId: string;

  $: if (deck && !loaded) {
    loaded = true;
    name = deck.name;
  }

  function onChangeName() {
    updateDeckDebounced(deckId, { name });
  }
  function onOpenDeleteModal(id: string) {
    deleteCardId = id;
  }
  function onDeleteDeck() {
    deleteCard(deleteCardId);
  }
  function onCreateCard() {
    createCard(deckId);
  }
</script>

<svelte:head>
  <title>Edit Deck {deckId}</title>
</svelte:head>

<div class="mt-2 mb-2">
  <a type="button" class="btn btn-primary" href="/decks">Back</a>
</div>

<div class="input-group">
  <input
    type="text"
    class="form-control"
    placeholder="Deck name"
    aria-label="Deck name"
    bind:value="{name}"
    on:input="{onChangeName}" />
</div>

<div class="list-group mt-2">
  {#each $cardStore.table.rows.filter((card) => card.deckId === deckId) as card}
    <div class="list-group-item list-group-item-action">
      <div class="d-flex justify-content-between">
        <div>
          <div class="overflow-hidden" style="max-height:32px">
            <Display delta="{card.front}" />
          </div>
          <div class="overflow-hidden" style="max-height:32px">
            <Display delta="{card.back}" />
          </div>
        </div>
        <div>
          <div class="btn-group" role="group" aria-label="List Options">
            <a
              type="button"
              class="btn btn-primary"
              href="{`/decks/${deckId}/cards/${card.id}/edit`}">Edit</a>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              on:click="{() => onOpenDeleteModal(deck.id)}">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="clearfix mt-4">
  <button
    type="button"
    class="btn float-end btn-primary"
    on:click="{onCreateCard}">Create</button>
</div>

<div
  class="modal fade"
  id="delete-modal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="delete-modal-label"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="delete-modal-abel">
          Delete Card {$cardStore.table.byId(deleteCardId)?.id}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
      </div>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button>
        <button
          type="button"
          class="btn btn-danger"
          data-bs-dismiss="modal"
          on:click="{onDeleteDeck}">Confirm Delete</button>
      </div>
    </div>
  </div>
</div>
