<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type {
    Delta,
    Editor,
    TextDocument,
    EditorChangeEvent,
  } from "typewriter-editor";
  import Root from "./Root.svelte";

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

<Root editor="{editor}" />
