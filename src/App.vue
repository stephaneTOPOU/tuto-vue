<template>
  <div class="container">
    <p>compteur : {{ count }}</p>
    <div v-if="count > 5">Vous avez dépassé 5</div>
    <div v-else-if="count < 0">Vous êtes en dessous de 0</div>
    <div v-else>
      <button @click="increment" class="btn btn-primary">Incrémenter</button>
      <button @click="decrement" class="btn btn-danger">Décrémenter</button>
    </div>

    <hr />
    <div class="mb-3">
      

      <form action="" @submit.prevent="addMovie" class="d-flex">
        <input
          type="text"
          placeholder="Ajouter un film"
          v-model="movieName"
          class="form-control me-2"
        />
        <button type="submit" class="btn btn-outline-success">Ajouter</button>
      </form>
      
      <hr>
      <button @click="sortMovies" class="btn btn-secondary">Réorganiser</button>
      <ul>
        <li v-for="movie in movies" :key="movie">
          {{ movie }}
          <button @click="deleteMovie(movie)" class="btn btn-outline-danger">
            Supprimer
          </button>
        </li>
      </ul>
    </div>
    <hr />
    <a href="TodoListe">TodoListe</a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const movieName = ref("");

const movies = ref(["Matrix", "Lilo & Stitch", "Titanic"]);

const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};

const deleteMovie = (movie) => {
  movies.value = movies.value.filter((m) => m !== movie);
};

const sortMovies = () => {
  movies.value.sort((a, b) => a.localeCompare(b));
};

const addMovie = () => {
  movies.value.push(movieName.value)
  movieName.value = ""
}
</script>
