<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="myModalLabel">Modal title</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  modalOpen: {
    type: Boolean,
    default() {
      return false
    },
    required: true,
  },
})
const emits = defineEmits(['closeEvent'])

const modal = ref(null)

onMounted(() => {
  modal.value = new Modal(document.getElementById('myModal'))
})

// const showModal = () => {
//   modalOpen.value = true
//   controlModal()
// }

const closeModal = () => {
  modal.value.hide()
  emits('closeEvent')
}

// const controlModal = () => {
//   if (props.modalOpen) {
//     modal.value.show()
//   } else {
//     modal.value.hide()
//   }
// }
const isShow = computed(() => {
  return props.modalOpen
})
watch(isShow, (newVal, oldVal) => {
  if (newVal === true || oldVal === true) {
    modal.value.show()
  } else {
    modal.value.hide()
  }
})
</script>
