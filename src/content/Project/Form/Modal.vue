<template>
  <div class="modal_box">
    <MakeButton @click="showModal">showModal</MakeButton>
    <MakeModal :modal-open="show" title="我是modal" @closeEvent="closeModal">
      <ModalA></ModalA>
    </MakeModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MakeButton from '../../../views/MakeComponents/MakeButton.vue'
import MakeModal from '../../../views/MakeComponents/MakeModal.vue'
import ModalA from '../../../views/Modal/ModalA.vue'
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

<style scoped>
.modal_box {
  padding: 1rem;
}
</style>
