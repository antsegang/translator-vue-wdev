<template>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2 mt-5">
            <div class="col">
                <cardComponent class="text-center">
                    <template #content>
                        <div class="profile-cover ">

                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt=""
                            class="profile-photo mb-0 ">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre</label>
                            <input type="text" v-model="name" class="form-control" name="name" id="name"
                                aria-describedby="helpId" />
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Apellidos</label>
                            <input type="text" v-model="lastname" class="form-control" name="lastname" id="lastname"
                                aria-describedby="helpId" />
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" v-model="username" class="form-control" name="username" id="username"
                                aria-describedby="helpId" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo</label>
                            <input type="email" v-model="mail" class="form-control" name="email" id="email"
                                aria-describedby="helpId" />
                        </div>
                        <div class="d-grid gap-2">
                            <div class="d-grid gap-2">
                                <button type="button" name="" id="" class="btn btn-primary">
                                    Guardar
                                </button>
                            </div>

                        </div>

                    </template>
                </cardComponent>
            </div>
        </div>

    </div>
</template>

<script setup>
const session = JSON.parse(localStorage.getItem('session'));
const name = ref(`${session.name}`);
const lastname = ref(`${session.lastname}`);
const username = ref(`${session.userName}`);
const mail = ref(`${session.email}`);
import cardComponent from '../components/cardComponent.vue';
import localStorage from '../services/localStorageService';
import { ref } from 'vue';
</script>

<style scoped>
.profile-cover {
    width: 100;
    height: 50vh;
    border-radius: 7px;
    background: url(https://cdn.pixabay.com/photo/2022/06/21/14/32/neon-7275959_1280.png);
    box-shadow: #0d0d0d 3px 3px 10px 0px;
}

.profile-photo {
    background-color: #979797;
    width: 25vh;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: #0d0d0d 3px 3px 10px 0px;

}
</style>