<template>
    <section class="contact">
        <h2 class="contact__title">Contact Us</h2>
        <form class="contact__form">
            <div class="contact__form-group">
                <label for="name" class="contact__form-label">Name:</label>
                <input type="text" id="name" class="contact__form-input" />
            </div>
            <div class="contact__form-group">
                <label for="email" class="contact__form-label">Email:</label>
                <input type="email" id="email" class="contact__form-input" />
            </div>
            <div class="contact__form-group">
                <label for="message" class="contact__form-label">Message:</label>
                <textarea id="message" class="contact__form-textarea"></textarea>
            </div>
            <button type="submit" class="contact__form-button">Send</button>
        </form>
    </section>
</template>

<script setup></script>