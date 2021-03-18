<script context="module" lang="ts">
  export async function load(request: {
    page: { params: { deckId: string; cardId: string } };
  }) {
    return {
      props: request.page.params,
    };
  }
</script>

<script lang="ts">
  import { cardStore } from "$lib/state/cards";

  export let deckId: string;
  export let cardId: string;

  $: card = $cardStore.table.byId(cardId);
  let init = false;
  let front: string;
  let back: string;

  $: if (card && !init) {
    init = true;
    front = card.front.toString();
    back = card.back.toString();
  }
</script>

<svelte:head>
  <title>Edit Card {cardId}</title>
</svelte:head>

<div>
  <a type="button" class="btn btn-primary" href="{`/decks/${deckId}/edit`}"
    >Back</a>
</div>

<div>
  {front}
</div>
<div>
  {back}
</div>
