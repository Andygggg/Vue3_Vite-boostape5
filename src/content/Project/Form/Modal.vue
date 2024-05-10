<template>
  <button @click="showModal">click test</button>
  <MakeModal :modal-open="show" @closeEvent="closeModal"></MakeModal>
</template>

<script setup>
import { ref } from 'vue'
import MakeModal from '../../../views/MakeComponents/MakeModal.vue'
defineEmits(['closeEvent'])

const show = ref(false)
const showModal = () => {
  show.value = true
  console.log(show.value)
}
const closeModal = () => {
  show.value = false
  console.log(show.value)
}
</script>
