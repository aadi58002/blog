<script setup lang="ts">
const props = defineProps<{
   data: Object
}>()
</script>

<template>
    <a :href="'/blog' + data.link">
        <div class="blogEntry">
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
    border: 2px solid var(--vp-c-brand-soft);
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
}

.blogEntry:hover{
    border-color: var(--vp-custom-block-info-border);
    background-color: var(--vp-custom-block-tip-bg);
    color: var(--vp-custom-block-info-text);
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
    padding-top: 5px;
    font-weight: 400;
}
</style>
