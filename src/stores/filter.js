import { defineStore } from 'pinia'

export const useFilter = defineStore('useFilter', () => {
  const currency = (num) => {
    const n = parseInt(num, 10)
    const formattedNumber = n.toLocaleString()
    return formattedNumber
  }

  return { currency }
})
