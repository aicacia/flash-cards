<script lang="ts">
  import { createDeck, deckStore, deleteDeck } from "$lib/state/decks";

  let name = "";
  let search = "";
  let deleteDeckId: string;

  function onEnterKey(event: KeyboardEvent) {
    if (event.code === "Enter") {
      createDeck(name);
      name = "";
    }
  }
  function onDeleteDeck() {
    deleteDeck(deleteDeckId);
  }
  function onOpenDeleteModal(id: string) {
    deleteDeckId = id;
  }
</script>

<svelte:head>
  <title>Decks</title>
</svelte:head>

<div class="input-group">
  <input
    type="text"
    class="form-control"
    placeholder="New Deck name"
    aria-label="New Deck name"
    bind:value="{name}"
    on:keydown="{onEnterKey}" />
</div>

<div class="input-group">
  <span class="input-group-text"><i class="bi bi-search"></i></span>
  <input
    type="text"
    class="form-control"
    placeholder="Filter"
    aria-label="Filter"
    bind:value="{search}"
    on:keydown="{onEnterKey}" />
</div>

<div class="list-group mt-2">
  {#each $deckStore.table.rows.filter((row) =>
    row.name.includes(search)
  ) as deck}
    <div class="list-group-item list-group-item-action">
      <div class="d-flex justify-content-between">
        <h3>
          {deck.name}
        </h3>
        <div class="btn-group" role="group" aria-label="List Options">
          <a
            type="button"
            class="btn btn-primary"
            href="{`/decks/${deck.id}/edit`}">Edit</a>
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
  {/each}
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
          Delete {$deckStore.table.byId(deleteDeckId)?.name}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This will delete all data associated with this deck.</p>
      </div>
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
