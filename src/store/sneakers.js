import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSneakersStore = defineStore('sneakers', () => {
  const sneakersList = ref([])
  const sneakersDetail = ref({})

  return {
    sneakersList,
    sneakersDetail,
    async getSneakersList() {
      try {
        const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/sneakers/')
        sneakersList.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async getSneakersDetail(id) {
      try {
        const response = await axios.get(`https://b1364cf1f3ab4cd9.mokky.dev/sneakers/${id}/`)
        sneakersDetail.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async createSneakers(data) {
      try {
        await axios.post('https://b1364cf1f3ab4cd9.mokky.dev/sneakers/', data)
      } catch (error) {
        console.error(error)
      }
    },
    async updateSneakers(id, data) {
      try {
        await axios.patch(`https://b1364cf1f3ab4cd9.mokky.dev/sneakers/${id}/`, data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
