<template>
  <div class="order_box">
    <MakeTable
      :table_header="orderHeader"
      :table_data="control_order.order_list"
      table_scroll="70vh"
      :table_pagination="true"
      :table_page="8"
    >
      <template #cell(create_at)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(email)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(products)="data">
        <ul class="list-unstyled">
          <li v-for="(product, i) in data.value" :key="i">
            {{ product.product.title }} 數量：{{ product.qty }}
            {{ product.product.unit }}
          </li>
        </ul>
      </template>
      <template #cell(total)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(is_paid)="data">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            :id="`paidSwitch${data.item.id}`"
            v-model="data.item.is_paid"
          />
          <label class="form-check-label" :for="`paidSwitch${data.item.id}`">
            <span v-if="data.item.is_paid">已付款</span>
            <span v-else>未付款</span>
          </label>
        </div>
      </template>
      <template #cell(edit)>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm">
            <i class="bx bx-show"></i>
          </button>
          <button class="btn btn-outline-danger btn-sm">
            <i class="bx bxs-trash"></i>
          </button>
        </div>
      </template>
    </MakeTable>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { controlOrder } from '@/stores/OrderList.js'
import MakeTable from '@/views/MakeComponents/MakeTable.vue'

//獲取訂單資訊
const control_order = controlOrder()
onMounted(() => {
  control_order.getOrderList()
})

//產品訂單標題
const orderHeader = reactive([
  { key: 'create_at', label: '購買時間', sort: false, width: '120' },
  { key: 'email', label: 'Email', sort: false, width: '120' },
  { key: 'products', label: '購買款項', sort: false, width: '200' },
  { key: 'total', label: '應付金額', sort: false, width: '120' },
  { key: 'is_paid', label: '是否付款', sort: false, width: '150' },
  { key: 'edit', label: '編輯', sort: false, width: '200' },
])
</script>

<style scoped>
.order_box {
  padding: 0.8rem 0 0.8rem 0;
}
</style>
