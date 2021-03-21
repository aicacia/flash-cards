<script lang="ts">
  import { onMount } from "svelte";
  import type { Readable } from "svelte/store";
  import type { AttributeMap, Editor, EditorRange } from "typewriter-editor";

  export let editor: Editor;
  let mounted = false;
  let editorStoresActive: Readable<AttributeMap>;
  let editorStoresSelection: Readable<EditorRange>;
  let editorStoresFocus: Readable<boolean>;
  let editorStoresUpdateEditor: (editor: Editor) => void;

  $: if (editor && editorStoresUpdateEditor) {
    editorStoresUpdateEditor(editor);
  }

  onMount(async () => {
    const { editorStores } = await import("typewriter-editor/lib/stores");
    const { active, selection, focus, updateEditor } = editorStores(editor);

    editorStoresActive = active;
    editorStoresSelection = selection;
    editorStoresFocus = focus;
    editorStoresUpdateEditor = updateEditor;
    mounted = true;
  });
</script>

{#if editor && mounted}
  <slot
    commands="{editor.commands}"
    active="{$editorStoresActive}"
    selection="{$editorStoresSelection}"
    focus="{$editorStoresFocus}" />
{/if}
