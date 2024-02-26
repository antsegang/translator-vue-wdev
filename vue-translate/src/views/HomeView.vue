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
        <cardComponent v-if="session === 'null' && esLogin === 'false' && Hform === 'login'" title="Login"
          class="w-100 mb-md-0 mb-3">
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
              <button type="submit" @click.prevent="userServices.login()" id="enviar"
                class="btn btn-primary w-100 ">Iniciar
                sesión</button>
              <p>¿No tienes cuenta? <a href="" @click="handlerServices.HformRegister()"
                  style="text-decoration: none; color:bisque">Registrarse</a>
              </p>
            </form>
          </template>
        </cardComponent>
        <cardComponent v-if="session === 'null' && esLogin === 'false' && Hform === 'register'" title="Registro"
          class="w-100 mb-md-0 mb-3">
          <template #content>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label  " style="font-size: 20px;">Nombre</label>
                <input type="text" placeholder="Jhon" class="form-control bg-transparent " id="name">
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label  " style="font-size: 20px;">Apellidos</label>
                <input type="text" placeholder="Doe" class="form-control bg-transparent " id="lastname">
              </div>
              <div class="mb-3">
                <label for="username" class="form-label  " style="font-size: 20px;">Username</label>
                <input type="text" placeholder="jhondoe" class="form-control bg-transparent " id="username">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label  " style="font-size: 20px;">Correo</label>
                <input type="email" placeholder="correo@correo.com" class="form-control bg-transparent " id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label" style="font-size: 20px;">Contraseña</label>
                <input type="password" class="form-control bg-transparent" placeholder="Digite su contraseña"
                  id="password">
              </div>
              <button type="submit" @click="userServices.register()" id="enviar"
                class="btn btn-primary w-100 ">Registrarme</button>
              <p>¿Ya tienes cuenta? <a href="" @click="handlerServices.HformLogin()"
                  style="text-decoration: none; color:bisque">Login</a>
              </p>
            </form>
          </template>
        </cardComponent>
      </div>
    </div>
  </main>
</template>
<script setup>
import cardComponent from '../components/cardComponent.vue';
import userServices from '../services/userServices.js';
import localStorage from '../services/localStorageService';
import handlerServices from '../services/handlerServices.js';
let session = localStorage.getItem('session');
let esLogin = localStorage.getItem('esLogin');
let Hform = localStorage.getItem('Hform');
</script>
