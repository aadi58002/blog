<script setup>
const props = defineProps({
    url: String,
    title: String
})
</script>

<template>
    <div class="info custom-block blog"><a :href="url">{{ title }}</a></div>
</template>

<style scoped>
.custom-block{
    padding: 20px;
 }
 .blog{
     text-align: center;
     font-size: 2rem;
     color: var(--vp-custom-block-danger-text);
 }
</style>
