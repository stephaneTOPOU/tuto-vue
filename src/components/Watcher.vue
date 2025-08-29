<template>
  <input type="text" v-model="page.title" />
  <p> Temps écoulé : {{ time }}</p>
  <button @click="reset">Reset</button>
</template>

<script setup>
import { useTimer } from "@/composables/useTimer";
import { ref, watchEffect } from "vue";

const page = ref({
    title: ""
});

const { time, reset } = useTimer()

watchEffect(() => {
    document.title = page.value.title
})
</script>
