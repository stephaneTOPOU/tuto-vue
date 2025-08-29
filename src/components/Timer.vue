<template>
    <div ref="div">
        Temps : {{ time }}
        <br />
        Largeur de la div : {{ size.width }}, Hauteur de la div : {{ size.height }}
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const div = ref(null)
const time = ref(0);
const size = ref({width: 0, height: 0})
let Timer
onMounted(() => {
    const rect = div.value.getBoundingClientRect()
    size.value = {width: rect.width, height: rect.height}
    Timer = setInterval(() => {
        time.value++;
    }, 1000);
});

onUnmounted(() => {
    clearInterval(Timer);
});
</script>