<template>
  <div class="product_box">
    <div class="btn_box">
      <MakeButton btn_class="btn_blue" @click="addProduct(true)">新增產品</MakeButton>
    </div>
    <MakeTable
      :table_header="productHeader"
      :table_data="control_Product.product_list"
      table_scroll="70vh"
      :table_pagination="true"
      :table_page="8"
    >
      <template #cell(category)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(title)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(origin_price)="data">
        <span>{{ filter.currency(data.value) }}</span>
      </template>
      <template #cell(price)="data">
        <span>{{ filter.currency(data.value) }}</span>
      </template>
      <template #cell(is_enabled)="data">
        <span class="text-success" v-if="data.value">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </template>
      <template #cell(edit)="data">
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="addProduct(false, data.item)">
            <i class="bx bxs-pencil"></i>
          </button>
          <button
            class="btn btn-outline-danger btn-sm"
            @click="control_Product.delProduct(data.item.id)"
          >
            <i class="bx bxs-trash"></i>
          </button>
        </div>
      </template>
    </MakeTable>
  </div>
  <MakeModal :modal-open="show" title="新增產品" @closeEvent="closeModal">
    <ProductModal @closeEvent="closeModal" :product="Product_data"></ProductModal>
  </MakeModal>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { controlProduct } from '@/stores/productList.js'
import MakeButton from '@/views/MakeComponents/MakeButton.vue'
import MakeModal from '@/views//MakeComponents/MakeModal.vue'
import MakeTable from '@/views/MakeComponents/MakeTable.vue'
import ProductModal from './ProductModal.vue'
import { useFilter } from '@/stores/filter.js'

// //轉換格式
const filter = useFilter()

//獲取產品資訊
const control_Product = controlProduct()
onMounted(() => {
  control_Product.getProductList()
})

//產品表格標題
const productHeader = reactive([
  { key: 'category', label: '分類', sort: false, width: '120' },
  { key: 'title', label: '產品名稱', sort: false },
  { key: 'origin_price', label: '原價', sort: false, width: '120' },
  { key: 'price', label: '售價', sort: false, width: '120' },
  { key: 'is_enabled', label: '是否啟用', sort: false, width: '100' },
  { key: 'edit', label: '編輯', sort: false, width: '200' },
])

//帶入modal產品資訊
const Product_data = ref({})

//新增產品modal
const show = ref(false)
const addProduct = (isNew, item) => {
  if (isNew) {
    Product_data.value = {}
  } else {
    Product_data.value = { ...item }
  }
  show.value = true
}
const closeModal = () => {
  show.value = false
}
</script>

<style scoped>
.product_box {
  padding: 0.8rem 0 0.8rem 0;
}
.btn_box {
  padding: 0.2rem 0 0.8rem 0;
  display: flex;
  flex-direction: row-reverse;
}
</style>
