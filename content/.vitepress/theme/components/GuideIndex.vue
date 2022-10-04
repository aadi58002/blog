<script setup>
import GuideTopicsList from './GuideTopicsList.vue'
import * as paths from '../../paths'
</script>

<template>
    <div class="container">
        <GuideTopicsList :list="paths.sidebarGuideLinux()" color="red" image="/arch-logo.webp" imageWidth="40%"/>
        <GuideTopicsList :list="paths.sidebarGuideWebdev()" color="green"  image="/web-dev.webp" imageWidth="30%"/>
        <GuideTopicsList :list="paths.sidebarGuideEmacs()" color="blue" image="/doom-emacs.webp" imageWidth="30%"/>
        <GuideTopicsList :list="paths.sidebarGuideProglang()" color="yellow" image="/programming-lang.webp" imageWidth="90%"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
 }
</style>
