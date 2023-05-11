<!-- This code displays the login page and the name of the user stored in the user store. It also updates the user's name to "æå" after a delay of 1 second.-->
<template>
  <div>login</div>
  <div>{{ userStore.name }}</div>
</template>

<script setup>
import { useUserStore } from '@/web/store/user'

const userStore = useUserStore()
setTimeout(() => {
  userStore.updateName('李四')
}, 1000)
</script>

<style scoped>

</style>