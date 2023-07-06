<script setup lang="ts">
import VueGraphicWalker from './components/VueGraphicWalker.vue';

// use case 2: useGraphicWalker
// import { useGraphicWalker } from './useGraphicWalker';
// import { onMounted, ref } from 'vue';
// const gw = ref<HTMLElement | null>(null);
// onMounted(() => {
//   const { render } = useGraphicWalker(gw)
//   render();
// })
</script>

<template>
  <!-- use case 1: VueGraphicWalker -->
  <VueGraphicWalker />
  <!-- use case 2: useGraphicWalker -->
  <!-- <div ref="gw"></div> -->
</template>

<style scoped>
</style>
