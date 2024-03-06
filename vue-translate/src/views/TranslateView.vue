<template>
    <div class="container mt-5 ">
        <div class="row justify-content-center align-items-center g-2 text-center">
            <div class="col-md-6 col-12 ">
                <cardComponent title="Entrada">
                    <template #content>
                        <button v-if="miIdioma != ''" class="btn btn-success" @click="setSource()">
                            ¿Estás escribiendo en {{ miIdioma }}?
                        </button>
                        <div class="mb-3">
                            <label for="" class="form-label"></label>
                            <textarea @change="detectLenguage()" v-model="textSource"
                                class="form-control bg-transparent " name="traducir" id="traducir" rows="5"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Idioma</label>
                            <selectComponent :method="changeLenguageSource" defaultOption="Selecciona un idioma"
                                :idioma="miIdioma === '' ? 'Selecciona un idioma' : source">
                                <template #opts>
                                    <option :value="language.language" v-for="language in arrayLenguages">
                                        {{ language.language }}
                                    </option>
                                </template>
                            </selectComponent>
                        </div>

                    </template>
                </cardComponent>
            </div>
            <div class="col-md-6 col-12 ">
                <cardComponent title="Resultado">

                    <template #content>
                        <div class="mb-3">
                            <label for="" class="form-label"></label>
                            <textarea class="form-control bg-transparent" name="resultado" id="resultado" rows="5"
                                readonly></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Idioma</label>
                            <selectComponent :method="changeLenguageTarget" :idioma="target">
                                <template #opts>
                                    <option v-for="language in arrayLenguages">
                                        {{ language.language }}
                                    </option>
                                </template>
                            </selectComponent>
                        </div>
                    </template>
                </cardComponent>
            </div>
        </div>
        <div class="row mt-5"><button class="btn btn-success shadow-lg" @click="translate()">Translate</button></div>
    </div>
</template>

<script setup>
import cardComponent from '../components/cardComponent.vue';
import selectComponent from '../components/selectComponent.vue';
import translateServices from '../services/translateServices';
import { onBeforeMount, onMounted, ref } from 'vue';

const textSource = ref('');
const target = ref('en');
const source = ref('es');
const arrayLenguages = ref([]);
const miIdioma = ref('');

const getLenguages = async () => {
    const response = await translateServices.getLenguages();
    arrayLenguages.value = response.data.data.languages;
    console.log(arrayLenguages.value);
};

const detectLenguage = async () => {
    const response = await translateServices.detectLenguage(textSource.value);
    const detections = response.data.data.detections[0];
    const idioma = detections[0].language;
    miIdioma.value = idioma
    console.log(response);
    console.log(idioma);
};

const translate = async () => {
    const response = await translateServices.translate(textSource.value, source.value, target.value);
    console.log(response);
};

const changeLenguageSource = (event) => {
    source.value = event.target.value;
};

const changeLenguageTarget = (event) => {
    target.value = event.target.value;
};

const setSource = () => {
    if (miIdioma.value !== '') {
        source.value = miIdioma.value;
        console.log('Idioma de origen cambiado a:', source.value);
    } else {
        console.log('El idioma no está detectado aún.');
    }
}


onMounted(() => {
    // detectLenguage();
    //translate();
    getLenguages();
});

</script>