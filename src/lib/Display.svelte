<script lang="ts">
  import { onMount } from "svelte";
  import type { Delta, Editor } from "typewriter-editor";
  import Root from "./Root.svelte";

  export let delta: Delta | undefined;
  let editor: Editor;

  onMount(async () => {
    const { Editor, Delta, TextDocument } = await import("typewriter-editor");
    editor = new Editor();

    if (delta) {
      editor.set(new TextDocument(new Delta(delta.ops)));
    }
  });
</script>

<Root editor="{editor}" readOnly />
