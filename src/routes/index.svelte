<script context="module" lang="ts">
  export async function load() {
    return { redirect: "/decks", status: 302 };
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
