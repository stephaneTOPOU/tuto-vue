<template>
    <header class="header">
        <nav class="header__nav">
            <ul><RouterLink class="header__title" :to="{name: 'home'}">Mon site</RouterLink></ul>
        <ul class="header__nav-list">
            <li class="header__nav-item"><RouterLink :to="{name: 'home'}" class="header__nav-link">Home</RouterLink></li>
            <li class="header__nav-item"><RouterLink :to="{name: 'about'}" class="header__nav-link">About</RouterLink></li>
            <li class="header__nav-item"><RouterLink :to="{name: 'contact'}" class="header__nav-link">Contact</RouterLink></li>
        </ul>
        </nav>
    </header>
</template>

<script setup></script>