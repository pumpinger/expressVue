<template>
    <div>User</div>
    <li v-for="item in userList">{{ item.username }}-{{ item.email }}</li>
    <br>
    <li v-for="item in userListRef">{{ item.username }}-{{ item.email }}</li>
</template>

<script setup lang="ts">

import {ref, reactive} from 'vue'
import axiosIns from "@/web/http/axios";


let userList = reactive<User[]>([]);
let userListRea:User[] = reactive([]);
let userListRef = ref<User[]>([]);

interface User {
    username: string;
    email: string;
    cc?:string;
}


axiosIns.get('/api/user')
    .then(function (response) {
        // handle success
        console.log(response.data)
        Object.assign(userList, response.data.data);
        // userList = response.data.data;
        userListRef.value = response.data.data;

        let test:User[] = response.data.data;
        for (let item of test){
            console.log(item.username)
            console.log(item.email)
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });




</script>

<style scoped>

</style>