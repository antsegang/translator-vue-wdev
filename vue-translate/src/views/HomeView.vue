<script setup>
import cardComponent from '../components/cardComponent.vue';
</script>

<template>
  <main>
    <div class="container text-center mt-5">
      <div class="gap-3 d-md-flex d-inline-block">
        <cardComponent class="w-100  mb-md-0 mb-3">
          <template #content>
            <h1>VUE JS</h1>
            <h2>Tranlate</h2>
            <blockquote class="blockquote">
              <p>“La única forma de hacer un gran trabajo es amar lo que haces. Si aún no lo has encontrado, sigue
                buscando.
                No te conformes.”</p>
              <p class=" blockquote-footer ">Designed & Developed by Samantha C.Z & Anthony S.A</p>
            </blockquote>
          </template>
        </cardComponent>
        <cardComponent title="Login" class="w-100 mb-md-0 mb-3">
          <template #content>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label  " style="font-size: 20px;">Correo</label>
                <input type="email" placeholder="correo@correo.com" class="form-control bg-transparent " id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label" style="font-size: 20px;">Contraseña</label>
                <input type="password" class="form-control bg-transparent" placeholder="Digite su contraseña"
                  id="password">
              </div>
              <button @click="login()" class="btn btn-primary w-100 ">Iniciar sesión</button>
            </form>
          </template>
        </cardComponent>
      </div>
    </div>

  </main>
</template>
