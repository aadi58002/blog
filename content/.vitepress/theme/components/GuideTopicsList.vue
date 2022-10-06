<script setup lang="ts">
const props = defineProps<{
   list: Object
   image: String
   imageWidth: String
   color: String
}>()
let boxColor: String;
if(props.color == "blue"){
     boxColor="tip"
} else if (props.color == "red"){
     boxColor="danger"
} else if (props.color == "green"){
     boxColor="customGreen"
} else if (props.color == "yellow"){
     boxColor="warning"
}
</script>

<template>
    <div :class="boxColor + ' custom-block homeListBlock'">
        <img :src="image" alt="unable to load image" :style="'width: ' + imageWidth"/>
        <div v-for="link in list.items">
            <a :href="link.link">{{ link.text }}</a>
        </div>
    </div>
</template>

<style scoped>
.homeListBlock{
    width: 45%;
    min-width: 400px;
    text-align: center;
    margin: 30px 0px;
}

a {
    text-decoration: none;
 }

img {margin: 20px auto;}

.customGreen {
    border-color: rgba(66, 184, 131, 0.5);
    color: #155f3e;
    background-color: rgba(66, 184, 131, 0.05);
 }
@media (prefers-color-scheme: dark) {
    .customGreen{
        border-color: rgba(66, 184, 131, 0.25);
        color: #42d392;
    }
}

.tip > div > a {
    color: var(--vp-c-brand);
}
</style>
