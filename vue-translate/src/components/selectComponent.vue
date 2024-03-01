<template>
    <select @change="(e) => method(e)" class="form-select form-select-lg bg-transparent " name="" id="">
        <option selected>{{ defaultOption }}</option>
        <slot name="opts">

        </slot>

    </select>
</template>
<script setup>
defineProps({
    defaultOption: {
        type: String
    },
    method: {
        type: Object,
        required: true
    }
})
</script>