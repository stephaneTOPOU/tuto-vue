<template>
    <div :class="classes">
        <slot></slot>
        <button aria-label="close" @click="emits('close')">&times;</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

    const props = defineProps({
        type: String
    })
    const emits = defineEmits(['close'])
    const classes = computed(() => `alert alert-${props.type}`)
</script>

<style scoped>
.alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}
</style>