<script setup lang="ts">
const props = defineProps<{
   data: Object
}>()
</script>

<template>
    <a :href="data.link">
        <div class="custom-block tip blogEntry">
            <div class="title">{{data.text}}</div>
            <div class="tagList">
                <span v-for="tag in data.tags">
                    <p>#{{ tag }}</p>
                </span>
            </div>
            <div class="description">{{data.description}}</div>
            <div>{{data.lastUpdated}}</div>
        </div>
    </a>
</template>

<style scoped>
.blogEntry{
    display: grid;
    grid-template-columns: 75% 25%;
    margin: 20px;
}
.title{
    font-weight: 600;
    font-size: 30px;
}
.tagList p{
    margin-right: 10px;
    display: inline-block;
    background-color: ;
}
.description{
    font-weight: 260;
}
</style>
