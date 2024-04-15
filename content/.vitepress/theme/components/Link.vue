<script setup>
const props = defineProps({
    tag: String,
    url: String,
    title: String
})
</script>

<template>
    <div class="info custom-block blog">
        <div class="tag">{{ tag }}</div>
        <a :href="url">{{ title }}</a>
    </div>
</template>

<style scoped>
a {
    text-decoration: none !important; 
}
.tag{
    color: var(--vp-c-text-2);
    font-size: 1.3rem;
    color: var(--vp-custom-block-danger-text);
 }
.custom-block{
    padding: 20px;
 }
 .blog{
     display: grid;
     grid-template-columns: auto auto;
     font-size: 1rem;
     color: var(--vp-c-green-light);
 }
</style>
