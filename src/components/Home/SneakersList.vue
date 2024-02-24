<script setup>
import { onMounted, ref, provide } from 'vue'
import axios from 'axios'
import SneakersItem from '@/components/Home/SneakersItem.vue'

const sneakersList = ref([])

const getSneakers = async () => {
  const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list')
  sneakersList.value = response.data
}

provide('getSneakers', getSneakers)

onMounted(() => {
  getSneakers()
})
</script>

<template>
  <div v-if="sneakersList.length > 0" class="flex flex-wrap justify-between gap-10 mt-10 mx-10">
    <SneakersItem
      v-for="sneakersItem in sneakersList"
      :key="sneakersItem.id"
      :sneakersItem="sneakersItem"
    >
    </SneakersItem>
  </div>
</template>
