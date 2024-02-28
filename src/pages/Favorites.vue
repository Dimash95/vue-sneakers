<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import FavoritesItem from '@/components/Favorites/FavoritesItem.vue'
import { useFavoritesStore } from '@/store/favorites.js'
const favoritesStore = useFavoritesStore()
const { getFavoritesList } = favoritesStore
const { favoritesList } = storeToRefs(favoritesStore)

onMounted(() => {
  getFavoritesList()
})
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold">Favorites</h1>
    <div v-if="favoritesList.length > 0" class="flex flex-wrap justify-between gap-10 mt-10 mx-10">
      <FavoritesItem
        v-for="favoritesItem in favoritesList"
        :key="favoritesItem.id"
        :favoritesItem="favoritesItem"
      />
    </div>
    <div v-else class="flex flex-col items-center justify-center mt-20">
      <p class="text-2xl font-bold">Favorites is empty</p>
      <img src="/package-icon.png" alt="package" class="w-40 h-40 mt-10" />
    </div>
  </div>
</template>
