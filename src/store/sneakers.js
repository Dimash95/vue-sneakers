import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSneakersStore = defineStore('sneakers', () => {
  const sneakersList = ref([])

  return {
    sneakersList,
    async getSneakersList() {
      try {
        const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/')
        sneakersList.value = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
