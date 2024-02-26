<script setup>
import { RouterLink, RouterView } from 'vue-router';
import startServices from './services/startServices.js';
import navComponent from './components/navComponent.vue';
</script>

<template>
  <header>
  </header>
  <navComponent />
  <RouterView />
</template>

<style scoped></style>
