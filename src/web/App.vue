<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<template>
  <div>
    <h3>Mouse: {{x}} x {{y}}</h3>
    <router-link to="/login">goLogin</router-link>
    <br>
    <router-link to="/">goIndex</router-link>
  </div>
  <RouterView/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
