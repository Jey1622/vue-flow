<template>
  <div id="app">
    <FlowDiagram />
  </div>
</template>

<script>
import FlowDiagram from './components/FlowDiagram.vue';

export default {
  components: { FlowDiagram },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
