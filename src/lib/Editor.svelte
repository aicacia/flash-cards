<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type {
    Delta,
    Editor,
    TextDocument,
    EditorChangeEvent,
  } from "typewriter-editor";
  import Root from "./Root.svelte";
  import Toolbar from "./Toolbar.svelte";

  export let delta: Delta | undefined;
  let editor: Editor;
  let lastDelta: Delta | undefined;

  const dispatch = createEventDispatcher<{ change: EditorChangeEvent }>();

  let DeltaImport: typeof Delta;
  let TextDocumentImport: typeof TextDocument;

  $: updateDelta(delta);

  function updateDelta(delta: Delta) {
    if (editor && delta !== lastDelta) {
      lastDelta = delta;
      editor.set(new TextDocumentImport(new DeltaImport(delta.ops)));
    }
  }

  onMount(async () => {
    const { Editor, Delta, TextDocument } = await import("typewriter-editor");
    editor = new Editor();

    DeltaImport = Delta;
    TextDocumentImport = TextDocument;

    if (delta) {
      editor.set(new TextDocument(new Delta(delta.ops)));
    }

    editor.on("change", (event: EditorChangeEvent) => {
      dispatch("change", event);
    });
  });
</script>

<Toolbar editor="{editor}" let:active let:commands>
  <div class="btn-group d-inline">
    <button
      type="button"
      class="btn btn-secondary btn-sm"
      class:active="{active.header === 2}"
      on:click="{commands.header2}"><i class="bi-type-h2"></i></button>

    <button
      type="button"
      class="btn btn-secondary btn-sm"
      class:active="{active.header === 3}"
      on:click="{commands.header3}"><i class="bi-type-h1"></i></button>

    <button
      type="button"
      class="btn btn-secondary btn-sm"
      class:active="{active.bold}"
      on:click="{commands.bold}"><i class="bi-type-bold"></i></button>

    <button
      type="button"
      class="btn btn-secondary btn-sm"
      class:active="{active.italic}"
      on:click="{commands.italic}"><i class="bi-type-italic"></i></button>

    <button
      type="button"
      class="btn btn-secondary btn-sm"
      disabled="{!active.undo}"
      on:click="{commands.undo}"><i class="bi-type-bold"></i></button>

    <button
      type="button"
      class="btn btn-secondary btn-sm"
      disabled="{!active.redo}"
      on:click="{commands.redo}"><i class="bi-type-bold"></i></button>
  </div>
</Toolbar>

<Root editor="{editor}" />
