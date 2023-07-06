<script setup lang="ts">
import { embedGraphicWalker, IGWProps } from '@kanaries/graphic-walker';
import { onBeforeUpdate, onMounted, ref } from 'vue'

const props = defineProps<IGWProps>()

const container = ref<HTMLElement | null>(null)

function renderGW () {
    if (!container.value) {
        return
    }
    embedGraphicWalker(container.value!, {
        ...props,
        keepAlive: props.keepAlive ?? true,
        themeKey: props.themeKey ?? 'g2'
    });
}

onMounted(() => {
    renderGW()
})

onBeforeUpdate(() => {
    renderGW()
})

</script>

<template>
    <div ref="container"></div>
</template>

<style scoped></style>
