<script context="module" lang="ts">
  export async function load(request: {
    page: { params: { deckId: string } };
  }) {
    return {
      props: { deckId: request.page.params.deckId },
    };
  }
</script>

<script lang="ts">
  import { createCard, deleteCard, cardStore } from "../../../state/cards";
  import { deckStore, updateDeckDebounced } from "../../../state/decks";

  export let deckId: string;

  let name = $deckStore.table.byId(deckId)?.name || "";
  let deleteCardId: string;

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
  <title>Deck {deckId}</title>
</svelte:head>

<div>
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

{#each $cardStore.table.rows.filter((card) => card.deckId === deckId) as card}
  <div>
    <button
      type="button"
      class="btn btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#delete-modal"
      on:click="{() => onOpenDeleteModal(card.id)}">
      Delete
    </button>
  </div>
{/each}

<div>
  <button type="button" class="btn btn-primary" on:click="{onCreateCard}"
    >Create</button>
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
