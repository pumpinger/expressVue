<!-- This code displays the login page and the name of the user stored in the user store. It also updates the user's name to "æå" after a delay of 1 second.-->
<template>
    <div>User</div>
    <li v-for="item in userList">{{ item.username }}-{{ item.email }}</li>
</template>

<script setup lang="ts">
import axios from 'axios'
import * as process from "process";
import {ref, reactive} from 'vue'

axios.defaults.baseURL = 'http://127.0.0.1:3000';

if (process.env.NODE_ENV === 'dev') {
    axios.defaults.baseURL = '/';
}

const axiosIns = axios.create({});
// Add a request interceptor
axiosIns.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// Add a response interceptor
axiosIns.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})


let userList = ref([]);

axiosIns.get('/api/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response.data)
        userList.value = response.data.data;
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