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
                                aria-describedby="helpId" :placeholder="pName" />
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Apellidos</label>
                            <input type="text" v-model="lastname" class="form-control" name="lastname" id="lastname"
                                aria-describedby="helpId" :placeholder="pLastname" />
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" v-model="username" class="form-control" name="username" id="username"
                                aria-describedby="helpId" :placeholder="pUsername" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo</label>
                            <input type="email" v-model="mail" class="form-control" name="email" id="email"
                                aria-describedby="helpId" :placeholder="pMail" />
                        </div>
                        <div class="d-grid gap-2">
                            <div class="d-grid gap-2">
                                <button type="button" name="" id="" class="btn btn-primary" @click="edit">
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
const name = ref('');
const lastname = ref('');
const username = ref('');
const mail = ref('');
const id = ref(`${session.id}`);
const pName = `${session.name}`;
const pLastname = `${session.lastname}`;
const pUsername = `${session.userName}`;
const pMail = `${session.email}`;

import cardComponent from '../components/cardComponent.vue';
import localStorage from '../services/localStorageService';
import userServices from '@/services/userServices';
import { ref } from 'vue';

const edit = async () => {
    const response = await userServices.editUser(id.value, name.value, lastname.value, username.value, mail.value);

    if (response.esEdicionExitosa === true) {
        alert(response.mensaje);
        location.href = "/user";
    } else {
        alert(response.mensaje);
    }
}
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