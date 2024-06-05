<template>
  <NavBer />
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { userSignIn } from '@/stores/signIn.js'
import { onBeforeMount } from 'vue'
import NavBer from '@/components/HexSchool/NavBar.vue'

const SignIn = userSignIn()
onBeforeMount(() => {
  SignIn.checkSignIn()
})
</script>

<style scoped></style>
