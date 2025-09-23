
import Header from "@/rooter/Header.vue";
import { routes } from "@/rooter/routes";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";


let router;

beforeEach(async () => {
    router = createRouter({
        history: createMemoryHistory(),
        routes: routes
    })
    router.push('/')
    await router.isReady()
})
describe("<Header>", () => {
    it("should render correct HTML", async () => {
        const wrapper = mount(Header, {
            global: {
                plugins: [router]
            }
        });
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<header class="header">
            <nav class="header__nav">
              <ul><a aria-current="page" href="/" class="router-link-active router-link-exact-active header__title">Mon site</a></ul>
              <ul class="header__nav-list">
                <li class="header__nav-item"><a aria-current="page" href="/" class="router-link-active router-link-exact-active header__nav-link">Home</a></li>
                <li class="header__nav-item"><a href="/about" class="header__nav-link">About</a></li>
                <li class="header__nav-item"><a href="/contact" class="header__nav-link">Contact</a></li>
              </ul>
            </nav>
          </header>"
        `);
        router.push('/about');
        await router.isReady();
        await flushPromises();
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<header class="header">
            <nav class="header__nav">
              <ul><a href="/" class="header__title">Mon site</a></ul>
              <ul class="header__nav-list">
                <li class="header__nav-item"><a href="/" class="header__nav-link">Home</a></li>
                <li class="header__nav-item"><a href="/about" class="router-link-active router-link-exact-active header__nav-link" aria-current="page">About</a></li>
                <li class="header__nav-item"><a href="/contact" class="header__nav-link">Contact</a></li>
              </ul>
            </nav>
          </header>"
        `);
    });
});