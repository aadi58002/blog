<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <p>{{ count }}</p>
    <div class="cont">
        <button class="btn decrease" @click="count--">Decrease</Button>
        <button class="btn reset" @click="count=0">Reset</Button>
        <button class="btn" @click="count++">Increase</Button>
    </div>
</template>

<style scoped>
p {text-align: center;}
.cont {text-align: center;}
.btn {
    width: 20%;
    border: 2px solid var(--vp-c-gray-light-3);
    border-radius: 8px;
}
.btn:hover {border-color: var(--vp-c-brand-light)}
.reset{margin-right: 20px}
.reset:hover {border-color: var(--vp-c-red-darker)}
.decrease {margin-right: 20px;}
.decrease:hover {border-color: #a8fff8;}
</style>
