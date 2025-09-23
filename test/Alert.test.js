import Alert from "@/components/Alert.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("<Alert>", () => {
    it("should render correct HTML", () =>{
        const wrapper = mount(Alert, {
            props: {
                type: "danger"
            },
            slots: {
                default: "Bonjour"
            }
        });
        expect(wrapper.html()).toMatchInlineSnapshot(`"<div data-v-3f4a8ec2="" class="alert alert-danger">Bonjour<button data-v-3f4a8ec2="" aria-label="close">×</button></div>"`);
    });

    it("should emit close event when button is clicked", async () =>{
        const wrapper = mount(Alert, {
            props: {
                type: "danger"
            },
            slots: {
                default: "Bonjour"
            }
        });
        await wrapper.get('[aria-label="close"]').trigger("click");
        expect(wrapper.emitted()).toHaveProperty("close");
        expect(wrapper.emitted().close).toHaveLength(1);
    });
});