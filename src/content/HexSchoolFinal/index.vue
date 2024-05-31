<template>
  <div>123HexSchoolFinal123</div>
  <button type="button" class="btn btn-primary">Primary</button>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

console.log(import.meta.env.VITE_APP_API, import.meta.env.VITE_APP_PATH)
</script>

<style scoped></style>
