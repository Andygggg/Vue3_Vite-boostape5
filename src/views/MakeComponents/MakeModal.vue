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
          <span class="modal_title" id="myModalLabel">{{ props.title }}</span>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot> 資料加載中 </slot>
        </div>
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
  title: {
    type: String,
    required: true,
  },
})
const emits = defineEmits(['closeEvent'])

const modal = ref(null)

onMounted(() => {
  modal.value = new Modal(document.getElementById('myModal'))
})

const closeModal = () => {
  modal.value.hide()
  emits('closeEvent')
}

const isShow = computed(() => {
  return props.modalOpen
})
watch(isShow, (newVal) => {
  if (newVal === true) {
    modal.value.show()
  } else {
    modal.value.hide()
  }
})
</script>

<style scoped>
.modal {
  --bs-modal-width: max-content;
}
.modal-content {
  min-width: 200px;
}
.modal-header {
  background-color: rgb(207, 207, 207);
}
.modal_title {
  margin-bottom: 0;
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
}
</style>
