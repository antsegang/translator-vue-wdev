<template>
    <div class="container mt-5 ">
        <div class="row justify-content-center align-items-center g-2 text-center">
            <div class="col-md-6 col-12 ">
                <cardComponent title="Entrada">
                    <template #content>
                        <div class="mb-3">
                            <label for="" class="form-label"></label>
                            <textarea class="form-control bg-transparent " name="traducir" id="traducir"
                                rows="5"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Idioma</label>
                            <selectComponent defaultOption="Selecciona un idioma">
                                <template #opts>
                                    <option id="opts">
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
                            <textarea class="form-control bg-transparent" name="resultado" id="resultado"
                                rows="5"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Idioma</label>
                            <selectComponent defaultOption="Selecciona un idioma">
                                <template #opts>
                                    <option id="opts">
                                    </option>
                                </template>
                            </selectComponent>
                        </div>
                    </template>
                </cardComponent>
            </div>
        </div>

    </div>
</template>

<script setup>
import cardComponent from '../components/cardComponent.vue';
import selectComponent from '../components/selectComponent.vue';
</script>