import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const controlProduct = defineStore('controlProduct', () => {
  const product_list = ref([])
  const getProductList = async () => {
    await axios
      .get(`api/${import.meta.env.VITE_APP_PATH}/admin/products?page=:page`)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          product_list.value = res.data.products
          console.log(product_list.value)
        }
      })
  }

  const addProduct = (product) => {
    axios
      .post(`api/${import.meta.env.VITE_APP_PATH}/admin/product`, { data: product })
      .then((res) => {
        console.log(res)
        getProductList()
        alert(res.data.message)
      })
  }

  return { product_list, getProductList, addProduct }
})
