<template>
  <div class="container">
    <div v-if="state === 'error'">
      <p>Une erreur est survenue lors du chargement du quiz.</p>
    </div>
    <div :aria-busy="state === 'loading'">
      <Quiz :quiz="quiz" v-if="quiz" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Quiz from "./Quiz.vue";

const quiz = ref(null);
const state = ref("loading");

onMounted(() => {
  fetch("/quiz.json")
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error("Impossible de récupérer le json");
    })
    .then((data) => {
      quiz.value = data;
      state.value = "idle";
    })
    .catch((err) => {
      state.value = "error";
    });
});
</script>

<style>
.container {
    margin-top: 2rem;
}
</style>
