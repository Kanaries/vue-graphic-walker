<script setup lang="ts">
import { embedGraphicWalker, IGWProps } from '@kanaries/graphic-walker';
import { onMounted, ref } from 'vue'

const props = defineProps<IGWProps>()

const container = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!container.value) {
        return
    }
    embedGraphicWalker(container.value!, {
        ...props,
        dark: "media"
    });
})

</script>

<template>
  <div ref="container"></div>
</template>

<style scoped>

</style>
