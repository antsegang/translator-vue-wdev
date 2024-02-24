<template>
  <div class="container text-center mt-5">
    <h1>¿De qué va esto?</h1>
    <div class="d-md-flex d-inline-block gap-3 mt-4">
      <cardComponent class="mb-md-0 mb-3" title="Descripción">
        <template #content>
          <p class="">Este es un proyecto de traducción de textos, en el que se pueden traducir textos de un
            idioma (elegido o
            autodetectado) a otro (elegido).</p>
        </template>
      </cardComponent>
      <div class="d-block">
        <cardComponent title="Tecnologías">
          <template #content>
            <p>Este es un proyecto de traducción de textos, en el que se pueden traducir textos de un idioma
              (elegido
              o
              autodetectado) a otro (elegido).</p>
          </template>
        </cardComponent>
        <div class="mt-3">
          <cardComponent title="Desarrolladores">
            <template #content>
              <p>Este es un proyecto de traducción de textos, en el que se pueden traducir textos de un idioma
                (elegido
                o
                autodetectado) a otro (elegido).</p>
            </template>
          </cardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cardComponent from '../components/cardComponent.vue';
</script>

<style></style>
