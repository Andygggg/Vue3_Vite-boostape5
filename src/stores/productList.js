import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const controlProduct = defineStore('controlProduct', () => {
  //產品清單
  const product_list = ref([])

  //獲取產品清單
  const getProductList = async () => {
    await axios
      .get(`api/${import.meta.env.VITE_APP_PATH}/admin/products?page=:page`)
      .then((res) => {
        // console.log(res)
        if (res.data.success) {
          product_list.value = res.data.products
        }
      })
  }

  //新增產品清單
  const addProduct = (product) => {
    axios
      .post(`api/${import.meta.env.VITE_APP_PATH}/admin/product`, { data: product })
      .then((res) => {
        // console.log(res)
        if (res.data.success) {
          getProductList()
        }
        alert(res.data.message)
      })
  }

  //編輯產品清單
  const editsProduct = (product) => {
    axios
      .put(`api/${import.meta.env.VITE_APP_PATH}/admin/product/${product.id}`, { data: product })
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          getProductList()
        }
        alert(res.data.message)
      })
  }

  //目前圖片網址
  const currentImgHttp = ref('')
  //上傳圖片
  const uploadProductImg = async (img) => {
    await axios.post(`api/${import.meta.env.VITE_APP_PATH}/admin/upload`, img).then((res) => {
      console.log(res)
      if (res.data.success) {
        currentImgHttp.value = res.data.imageUrl
      }
    })
  }

  return {
    product_list,
    getProductList,
    addProduct,
    editsProduct,
    uploadProductImg,
    currentImgHttp,
  }
})
