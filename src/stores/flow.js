import { defineStore } from "pinia";

export const useFlowStore = defineStore("flow", {
  state: () => ({
    nodes: [
      { id: "1", position: { x: 250, y: 5 }, data: { label: "Node 1" } },
      { id: "2", position: { x: 100, y: 100 }, data: { label: "Node 2" } },
      { id: "3", position: { x: 400, y: 100 }, data: { label: "Node 3" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", label: "Edge 1-2" },
      { id: "e1-3", source: "1", target: "3", label: "Edge 1-3" },
    ],
  }),
});
