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
        const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/')
        sneakersList.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async getSneakersDetail(id) {
      try {
        const response = await axios.get(
          `https://b1364cf1f3ab4cd9.mokky.dev/sneakers-detail/${id}/`
        )
        sneakersDetail.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async createSneakers(data) {
      try {
        await axios.post('https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/', data)
      } catch (error) {
        console.error(error)
      }
    },
    async updateSneakers(id, data) {
      try {
        await axios.patch(`https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/${id}/`, data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
