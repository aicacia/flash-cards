<script lang="ts">
  import { onMount } from "svelte";
  import type { Editor } from "typewriter-editor";

  export let editor: Editor;
  export let readOnly = false;

  let root;
  let lastEditor;

  $: updateEditor(editor, root);

  function updateEditor(editor: Editor, root: HTMLElement) {
    if (!root) return;
    if (lastEditor) {
      lastEditor.destroy();
    }
    lastEditor = editor;
    if (editor) {
      editor.setRoot(root);
      editor.enabled = !readOnly;
    }
  }

  onMount(async () => {
    const { docFromDom } = await import("typewriter-editor");

    const old = Array.from(root.childNodes);
    if (editor && root.children.length) {
      editor.set(docFromDom(editor, root));
      editor.enabled = !readOnly;
    }
    return () => {
      for (let i = 0; i < old.length; i++) root.appendChild(old[i]);
    };
  });
</script>

<div bind:this="{root}" class="pt-2">
  <slot />
</div>
