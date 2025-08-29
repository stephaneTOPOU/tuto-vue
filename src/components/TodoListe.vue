<template>
  <Layout>
    <template #header>En tête</template>
    <template #aside>Barre latérale</template>
    <template #main>Contenu principal</template>
    <template #footer>Bas de page</template>
  </Layout>
    <p v-if="remainingTodos > 0">Il vous reste {{ remainingTodos }} tâche{{ remainingTodos > 1 ? 's' : '' }} à faire</p>
    <!-- <Button><strong>Demo</strong>de bouton</Button> -->
  <form action="" @submit.prevent="addTodo">
    <fieldset role="group">
      <input v-model="newTodo" type="text" placeholder="Tâche à effectuer" />
      <button :disabled="newTodo.length === 0">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire :(</div>
  <div v-else>
    <ul>
      <li
        v-for="todo in sortedTodos"
        :key="todo.date"
        :class="{ completed: todo.completed }"
      >
        <!-- <label
          ><input type="checkbox" v-model="todo.completed" />{{
            todo.title
          }}</label
        > -->
        <!-- <checbox :label="todo.title" @check="console.log('coché')" @uncheck="console.log('décoché')"/> -->
         <checbox :label="todo.title"/>
      </li>
    </ul>
    <label>
      <input type="checkbox" v-model="hideCompleted" />
      Masquer les tâches complétées
    </label>
    <checbox label="Bonjour" />
  </div>
</template>

<script setup>

import { computed, ref } from "vue";
import Checbox from "./Checbox.vue";
import Button from "./Button.vue";
import Layout from "./Layout.vue";

const todos = ref([
  { title: "Exemple de tâche", completed: true, date: 1 },
  { title: "Tâche à faire", completed: false, date: 2 },
]);

const newTodo = ref("");
const hideCompleted = ref(false);

const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  });
  newTodo.value = "";
};

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1));
  if (hideCompleted.value === true) {
    return sortedTodos.filter(t => t.completed === false)
  }
  return sortedTodos
})

const remainingTodos = computed(() => {
    return todos.value.filter(t => t.completed === false).length
})
</script>

<style>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
