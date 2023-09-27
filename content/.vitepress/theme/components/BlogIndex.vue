<script setup>
import { reactive, computed } from 'vue'
import sidebarBlog from '../../blogs'
import BlogItem from './BlogItem.vue'

const data = sidebarBlog()[0]
const tagList = data.Uniqtags
const SearchTerms = reactive({"searchTags": []})
let FilteredResult = data.items
const displayList = computed(() => {
      return data.items.filter((item) =>{
          return SearchTerms.searchTags.every(e => item.tags.includes(e))
      })
})

function SearchTermAdd(tag){
   const index = SearchTerms.searchTags.indexOf(tag)
   if(index >= 0){
       SearchTerms.searchTags.splice(index,1)
   }else{
       SearchTerms.searchTags.push(tag)
   }
}

</script>

<template>
    <div class="container">
        <div class="searchTermBar">
            <p class="SearchTitle">Search Terms : </p>
            <span v-for="tag in SearchTerms.searchTags">
                <p class="Searchtag">{{ tag }}</p>
            </span>
        </div>
        <div class="tagListBar button">
            <button :class="{'tagButton ': true,'selected': SearchTerms.searchTags.indexOf(tag) >= 0}" v-for="tag in tagList" @click="SearchTermAdd(tag)">{{ tag }}</button>
        </div>
        <div v-for="item in displayList">
            <BlogItem :data="item" />
        </div>
    </div>
</template>

<style scoped>
.container{
    margin-top: 10px;
    padding: 0px 2%;
}

.searchTermBar{
   background-color: var(--vp-c-default-soft);
   display: flex;
   align-items: center;
   vertical-align: middle;
   flex-wrap: wrap;
   border-radius: 5px;
   padding: 5px;
   height: 60px;
}

.SearchTitle{
    margin: 5px;
}

.Searchtag{
    background-color: var(--vp-custom-block-tip-bg);
    margin: 5px;
    padding: 1px 5px;
    font-weight: 400;
    border-radius: 5px;
}

.tagListBar{
   display: inline-flex;
   flex-wrap: wrap;
   margin: 20px 0px;
}

.tagButton {
    border: 2px solid var(--vp-custom-block-tip-bg);
    margin: 0px 5px;
    border-radius: 20px;
    padding: 0 12px;
    line-height: 30px;
    font-size: 14px;
}
.selected {
    background-color: var(--vp-custom-block-tip-bg);
}
</style>
