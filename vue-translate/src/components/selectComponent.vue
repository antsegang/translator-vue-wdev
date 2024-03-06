<template>
    <select @change="(e) => method(e)" :value="idioma" class="form-select form-select-lg bg-transparent " name="" id="">
        <option selected>{{ defaultOption }}</option>
        <slot name="opts">

        </slot>
    </select>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    defaultOption: {
        type: String
    },
    method: {
        type: Function,
        required: true
    },
    idioma: {
        type: String,
        required: true
    }
})
</script>