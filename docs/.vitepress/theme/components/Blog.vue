<script setup>
import videoEb from './videoEb.vue'
const props = defineProps({
    blogurl: String,
    title: String
})
</script>

<template>
    <div class="info custom-block blog"><a :href="blogurl">{{ title  }}</a></div>
</template>

<style scoped>
.custom-block{
    padding-top: 8px;
 }
 .blog{
     text-align: center;
     font-size: 2rem;
     color: var(--vp-custom-block-danger-text);
 }
</style>
