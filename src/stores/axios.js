import axios from 'axios'
import { defineStore } from 'pinia'

export const axiosSetting = defineStore('setting', () => {
  const getCookie = () => {
    const axiosCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)axiosToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    )
    axios.defaults.headers.common['Authorization'] = axiosCookie
  }
  return { getCookie }
})
axios.defaults.baseURL = import.meta.env.VITE_APP_API
axios.defaults.withCredentials = true
