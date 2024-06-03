<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { userSignIn } from '@/stores/signIn.js'
import { onMounted } from 'vue'

const SignIn = userSignIn()
onMounted(() => {
  SignIn.checkSignIn()
})
</script>

<style scoped></style>
