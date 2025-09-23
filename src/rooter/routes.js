import About from "./About.vue";
import Contact from "./Contact.vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";

export const routes = [
    {path: '/', component: Home, name: "home"},
    {path: '/about', component: About, name: "about"},
    {path: '/contact', component: Contact, name: "contact"},
    {path: '/:pathMatch(.*)*', component: NotFound, name: "notfound"}
]