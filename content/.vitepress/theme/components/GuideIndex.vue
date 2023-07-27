<script setup>
import GuideTopicsList from './GuideTopicsList.vue'
import { sidebarGuideLinux, sidebarGuideWebdev, sidebarGuideEmacs ,sidebarGuideProglang} from '../../paths'
</script>

<template>
    <div class="container">
        <GuideTopicsList :list="sidebarGuideLinux()[0]" color="red" image="/public/arch-logo.webp" imageWidth="40%"/>
        <GuideTopicsList :list="sidebarGuideWebdev()[0]" color="green"  image="/public/web-dev.webp" imageWidth="30%"/>
        <GuideTopicsList :list="sidebarGuideEmacs()[0]" color="blue" image="/public/doom-emacs.webp" imageWidth="30%"/>
        <GuideTopicsList :list="sidebarGuideProglang()[0]" color="yellow" image="/public/programming-lang.webp" imageWidth="90%"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
 }
</style>
