<template>
    <select class="form-select form-select-lg bg-transparent " name="" id="">
        <option selected>{{ defaultOption }}</option>
        <slot name="opts">

        </slot>

    </select>
</template>
<script setup>
defineProps({
    defaultOption: {
        type: String
    }
})
</script>