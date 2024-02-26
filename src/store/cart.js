import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])

  return {
    cartList,
    async getCartList() {
      try {
        const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/cart-list/')
        cartList.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async createCartDetail(data) {
      try {
        await axios.post('https://b1364cf1f3ab4cd9.mokky.dev/cart-list/', data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCartDetail(id) {
      try {
        await axios.delete(`https://b1364cf1f3ab4cd9.mokky.dev/cart-list/${id}/`)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
