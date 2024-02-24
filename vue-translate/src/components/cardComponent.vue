<template>
    <div class="card card-bg text-white">
        <div class="card-header" v-if="title">
            <h2 style="font-size: 30px;">{{ title }}</h2>
        </div>
        <div class="card-body">
            <slot name="content">

            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
})
</script>

<style scoped>
.card-bg {
    background: #f2f2f244;
    backdrop-filter: blur(10px);
    text-justify: auto;
}
</style>