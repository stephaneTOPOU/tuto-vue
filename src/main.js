import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// import TodoListe from './components/TodoListe.vue'

// createApp(TodoListe).mount('#app')


// import TodoListePlusApi from './components/TodoListePlusApi.vue'

// createApp(TodoListePlusApi).mount('#app')


// import Watcher from './components/Watcher.vue'

// createApp(Watcher).mount('#app')


// import TPQuiz from './components/TPQuiz.vue'

// createApp(TPQuiz).mount('#app')

// import Transition from './components/Transition.vue'

// createApp(Transition).mount('#app')

import Transition from './rooter/App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './rooter/routes.js';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(Transition)
app.use(router)
app.mount('#app')
