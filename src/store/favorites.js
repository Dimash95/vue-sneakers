import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoritesList = ref([])

  return {
    favoritesList,
    async getFavoritesList() {
      try {
        const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/favorite/')
        favoritesList.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async createFavoritesDetail(data) {
      try {
        await axios.post('https://b1364cf1f3ab4cd9.mokky.dev/favorite/', data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteFavoritesDetail(id) {
      try {
        await axios.delete(`https://b1364cf1f3ab4cd9.mokky.dev/favorite/${id}/`)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
