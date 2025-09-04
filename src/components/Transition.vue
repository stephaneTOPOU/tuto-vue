<template>
    <button @click="toggleSpoiler"> Afficher / Masquer le spoiler </button>
    <FadeSlideTransition>
        <div v-if="showSpoiler" class="spoiler">
            <span>A la fin de la série Marc Cunningan meurt.</span>
        </div>
        <div v-else>
            <span>En savoir plus</span>
        </div>
    </FadeSlideTransition>

</template>

<script setup>
import { ref } from 'vue';
import FadeSlideTransition from './FadeSlideTransition.vue';


const showSpoiler = ref(false)
const toggleSpoiler = () => showSpoiler.value = !showSpoiler.value
</script>

<style>
.spoiler {
    padding: 1rem;
    border: 1px solid #ffffff58;
    
}
</style>