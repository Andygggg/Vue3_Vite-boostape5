import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const controlOrder = defineStore('controlOrder', () => {
  //訂單清單
  const order_list = ref([])

  //獲取訂單清單
  const getOrderList = async () => {
    try {
      const res = await axios.get(`api/${import.meta.env.VITE_APP_PATH}/admin/orders?page=:page`)
      if (res.data.success) {
        // order_list.value = res.data
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { order_list, getOrderList }
})
