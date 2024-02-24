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
                        <h3 class="mt-3">{{ name }}</h3>
                        <h3>{{ username }}</h3>
                        <h3>{{ mail }}</h3>
                    </template>
                </cardComponent>
            </div>
        </div>

    </div>
</template>

<script setup>
let name = 'John Doe';
let username = 'johndoe';
let mail = 'johndoe@mail.com';
import cardComponent from '../components/cardComponent.vue';
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