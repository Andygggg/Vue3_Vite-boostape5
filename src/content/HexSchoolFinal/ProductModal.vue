<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="mb-3">
        <label for="image" class="form-label">輸入圖片網址</label>
        <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" />
      </div>
      <div class="mb-3">
        <label for="customFile" class="form-label"
          >或 上傳圖片
          <i class="fas fa-spinner fa-spin"></i>
        </label>
        <input
          type="file"
          id="customFile"
          ref="inputFile"
          @change="uploadImg"
          class="form-control"
        />
      </div>
      <img class="img-fluid" alt="" :src="tempProduct.imageUrl" />
      <!-- 延伸技巧，多圖 -->
      <div class="mt-5">
        <div class="mb-3 input-group">
          <input type="url" class="form-control form-control" placeholder="請輸入連結" />
          <button type="button" class="btn btn-outline-danger">移除</button>
        </div>
        <div>
          <button class="btn btn-outline-primary btn-sm d-block w-100">新增圖片</button>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="mb-3">
        <label for="title" class="form-label">標題</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="tempProduct.title"
          placeholder="請輸入標題"
        />
      </div>

      <div class="row gx-2">
        <div class="mb-3 col-md-6">
          <label for="category" class="form-label">分類</label>
          <input
            type="text"
            class="form-control"
            id="category"
            v-model="tempProduct.category"
            placeholder="請輸入分類"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label for="price" class="form-label">單位</label>
          <input
            type="text"
            class="form-control"
            id="unit"
            v-model="tempProduct.unit"
            placeholder="請輸入單位"
          />
        </div>
      </div>

      <div class="row gx-2">
        <div class="mb-3 col-md-6">
          <label for="origin_price" class="form-label">原價</label>
          <input
            type="number"
            class="form-control"
            id="origin_price"
            v-model="tempProduct.origin_price"
            placeholder="請輸入原價"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label for="price" class="form-label">售價</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="tempProduct.price"
            placeholder="請輸入售價"
          />
        </div>
      </div>
      <hr />

      <div class="mb-3">
        <label for="description" class="form-label">產品描述</label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          v-model="tempProduct.description"
          placeholder="請輸入產品描述"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">說明內容</label>
        <textarea
          type="text"
          class="form-control"
          id="content"
          v-model="tempProduct.content"
          placeholder="請輸入產品說明內容"
        ></textarea>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :true-value="1"
            :false-value="0"
            v-model="tempProduct.is_enabled"
            id="is_enabled"
          />
          <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <button type="button" class="btn btn_save" @click="saveProduct">確認</button>
    <button type="button" class="btn btn_cancel" @click="closeModal">取消</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { controlProduct } from '@/stores/productList.js'

const emits = defineEmits(['closeEvent'])
const props = defineProps({
  product: {
    type: Object,
    default() {
      return {}
    },
  },
})

const closeModal = () => {
  emits('closeEvent')
}

const control_Product = controlProduct()
const saveProduct = () => {
  if (tempProduct.value.id) {
    control_Product.editsProduct(tempProduct.value)
  } else {
    control_Product.addProduct(tempProduct.value)
  }
  closeModal()
}

const tempProduct = ref({})

watch(
  () => props.product,
  (newVal) => {
    tempProduct.value = newVal
    inputFile.value.value = null
  },
  { deep: true },
)

const inputFile = ref(null)
const uploadImg = async () => {
  const uploadFile = inputFile.value.files[0]
  const formData = new FormData()
  formData.append('file-to-upload', uploadFile)
  tempProduct.value.imageUrl = await control_Product.uploadProductImg(formData)
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.btn_save {
  background-color: #0095ff;
  color: white;
}
.btn_save:hover {
  background-color: white;
  color: #0095ff;
  border: 1px solid #0095ff;
}
.btn_cancel {
  margin-right: 1rem;
  background-color: red;
  color: white;
}
.btn_cancel:hover {
  background-color: white;
  color: red;
  border: 1px solid red;
}
</style>
