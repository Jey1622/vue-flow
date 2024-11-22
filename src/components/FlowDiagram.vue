<template>
    <div class="flow-container">
      <VueFlow
        :nodes="flowStore.nodes"
        :edges="flowStore.edges"
        @update:nodes="flowStore.setNodes"
        @update:edges="flowStore.setEdges"
        fit-view
      />
    </div>
  </template>
  
  <script>
  import { VueFlow } from '@vue-flow/core';
  import { useFlowStore } from '@/stores/flow';
  
  export default {
    name: 'FlowDiagram',
    components: { VueFlow },
    setup() {
      const flowStore = useFlowStore(); // Access Pinia store
      return {
        flowStore,
      };
    },
  };
  </script>
  
  <style scoped>
  .flow-container {
    width: 100%;
    height: 100vh; /* Full height view */
  }
  </style>
  