import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const controlProduct = defineStore('controlProduct', () => {
  //產品清單
  const product_list = ref([])

  //獲取產品清單
  const getProductList = async () => {
    try {
      await axios
        .get(`api/${import.meta.env.VITE_APP_PATH}/admin/products?page=:page`)
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            product_list.value = res.data.products
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  //新增產品清單
  const addProduct = (product) => {
    try {
      axios
        .post(`api/${import.meta.env.VITE_APP_PATH}/admin/product`, { data: product })
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            getProductList()
          }
          alert(res.data.message)
        })
    } catch (error) {
      console.log(error)
    }
  }

  //編輯產品
  const editsProduct = (product) => {
    try {
      axios
        .put(`api/${import.meta.env.VITE_APP_PATH}/admin/product/${product.id}`, { data: product })
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            getProductList()
          }
          alert(res.data.message)
        })
    } catch (error) {
      console.log(error)
    }
  }

  //刪除產品
  const delProduct = (product_id) => {
    try {
      console.log(product_id);
      const check = confirm('確定刪除?')
      if (check) {
        axios
        .delete(`api/${import.meta.env.VITE_APP_PATH}/admin/product/${product_id}`)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            getProductList()
          }
          alert(res.data.message)
        }) 
      }
    } catch (error) {
      console.log(error);
    }
  }

  //上傳圖片
  const uploadProductImg = async (img) => {
    try {
      const { success,imageUrl} =  (await axios.post(`api/${import.meta.env.VITE_APP_PATH}/admin/upload`, img)).data
      if(success){
        return imageUrl
      }
    } catch (error) {
      console.log();
    }
  }

  return {
    product_list,
    getProductList,
    addProduct,
    editsProduct,
    uploadProductImg,
    delProduct,
  }
})
