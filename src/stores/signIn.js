import { defineStore } from 'pinia'
import axios from 'axios'

export const userSignIn = defineStore('signIn', () => {
  const userSignIn = async (user) => {
    try {
      await axios.post('admin/signin', user).then((res) => {
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { userSignIn }
})
