import Automerge from "automerge";
import { forage } from "@tauri-apps/tauri-forage";

export const NODE_ID_KEY = "NODE_ID";

let nodeId: string | undefined;

forage
  .getItem({ key: NODE_ID_KEY })()
  .then(async (storedNodeId) => {
    if (storedNodeId) {
      nodeId = storedNodeId;
    } else {
      nodeId = Automerge.uuid();
      await forage.setItem({ key: NODE_ID_KEY, value: nodeId })();
    }
  });

export function getNodeId() {
  return nodeId;
}
