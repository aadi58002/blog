<script setup>
import GuideTopicsList from './GuideTopicsList.vue'
import { sidebarGuideLinux, sidebarGuideWebdev, sidebarGuideEmacs ,sidebarGuideProglang} from '../../paths'
</script>

<template>
    <div class="container">
        <GuideTopicsList :list="sidebarGuideLinux()[0]" color="red" image="/Linux-Blog/arch-logo.webp" imageWidth="40%"/>
        <GuideTopicsList :list="sidebarGuideWebdev()[0]" color="green"  image="/Linux-Blog/web-dev.webp" imageWidth="30%"/>
        <GuideTopicsList :list="sidebarGuideEmacs()[0]" color="blue" image="/Linux-Blog/doom-emacs.webp" imageWidth="30%"/>
        <GuideTopicsList :list="sidebarGuideProglang()[0]" color="yellow" image="/Linux-Blog/programming-lang.webp" imageWidth="90%"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
 }
</style>
