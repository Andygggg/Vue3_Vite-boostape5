import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { axiosSetting } from './axios.js'

export const userSignIn = defineStore('signIn', () => {
  const router = useRouter()
  const axios_setting = axiosSetting()

  //使用者登入api
  const userSignIn = async (user) => {
    try {
      const res = await axios.post('admin/signin', user)
      if (res.data.success) {
        const { token, expired } = res.data
        document.cookie = `axiosToken=${token}; expires=${new Date(expired)}`
        axios_setting.getCookie()
        router.push({ name: 'HexSchoolFinal' })
      } else {
        alert('登入失敗')
      }
    } catch (error) {
      console.log(error)
    }
  }

  //檢查用戶是否仍持續登入
  const checkSignIn = () => {
    try {
      axios_setting.getCookie()
      axios.post('api/user/check').then((res) => {
        // console.log(res.data)
        if (!res.data.success) {
          alert('請重新登入')
          router.push({ name: 'UserLogin' })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  //登出
  const userLogout = () => {
    try {
      axios.post('logout').then((res) => {
        // console.log(res.data)
        if (res.data.success) {
          alert('已登出')
          router.push({ name: 'UserLogin' })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { userSignIn, checkSignIn, userLogout }
})
