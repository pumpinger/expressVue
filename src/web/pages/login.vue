<!-- This code displays the login page and the name of the user stored in the user store. It also updates the user's name to "æå" after a delay of 1 second.-->
<template>
  <div>login</div>
  <div>{{ userStore.name }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/web/store/user'

let a:number = 3
let b:number = a * 2

let c = (p:number):string=>{
    return String(p * 2)
}

const userStore = useUserStore()
setTimeout(() => {
  userStore.updateName(c(b))
}, 1000)

</script>

<style scoped>

</style>