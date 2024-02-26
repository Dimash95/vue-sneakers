<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSneakersStore } from '@/store/sneakers.js'
import SneakersItem from '@/components/Home/SneakersItem.vue'

const sneakersStore = useSneakersStore()
const { sneakersList } = storeToRefs(sneakersStore)
const { getSneakersList } = sneakersStore

onMounted(async () => {
  await getSneakersList()
})
</script>

<template>
  <div v-if="sneakersList" class="flex flex-wrap justify-between gap-10 mt-10 mx-10">
    <SneakersItem
      v-for="sneakersItem in sneakersList"
      :key="sneakersItem.id"
      :sneakersItem="sneakersItem"
    >
    </SneakersItem>
  </div>
</template>
