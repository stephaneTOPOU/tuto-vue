<template>
  <Transition name="fadeslide" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style>
.fadeslide-enter-active,
.fadeslide-leave-active {
  transition: all 0.5s ease;
}

.fadeslide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fadeslide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
