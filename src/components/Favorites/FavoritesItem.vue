<script setup>
import { defineProps } from 'vue'

import { useSneakersStore } from '@/store/sneakers.js'
import { useCartStore } from '@/store/cart.js'
import { useFavoritesStore } from '@/store/favorites.js'

const sneakersStore = useSneakersStore()
const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()

const { updateSneakers } = sneakersStore
const { getFavoritesList, deleteFavoritesDetail } = favoritesStore
const { createCartDetail, deleteCartDetail } = cartStore

const props = defineProps({
  favoritesItem: Object
})

const onHandleRemoveFromWishlist = async (favoritesItem) => {
  await updateSneakers(favoritesItem.id - 1, {
    isFavorite: !favoritesItem.isFavorite
  })

  await deleteFavoritesDetail(favoritesItem.id)

  await getFavoritesList()
}

const onHandleCart = async (sneakersItem) => {
  await updateSneakers(sneakersItem.id, {
    isAdded: !sneakersItem.isAdded
  })

  if (sneakersItem.isAdded) {
    await deleteCartDetail(sneakersItem.id)
  } else {
    await createCartDetail({
      id: sneakersItem.id,
      title: sneakersItem.title,
      price: sneakersItem.price,
      imageUrl: sneakersItem.imageUrl,
      isFavorite: sneakersItem.isFavorite,
      isAdded: true
    })

    await getFavoritesList()
  }
}
</script>

<template>
  <div
    class="relative w-72 border border-gray-200 rounded-3xl cursor-pointer transition hover:shadow-xl"
  >
    <img class="w-72 h-72 rounded-3xl" :src="props.favoritesItem.imageUrl" alt="favoritesItem" />
    <img
      class="absolute top-4 right-6"
      src="/like-2.svg"
      alt="heart"
      @click="() => onHandleRemoveFromWishlist(props.favoritesItem)"
    />
    <p class="mt-2 px-6">{{ props.favoritesItem.title }}</p>
    <div class="flex justify-between my-2 px-6">
      <div>
        <p class="text-gray-400">Цена:</p>
        <p class="font-bold">{{ props.favoritesItem.price }} тг.</p>
      </div>
      <img
        :src="props.favoritesItem.isAdded ? '/checked.svg' : '/plus.svg'"
        alt="plus"
        @click="() => onHandleCart(props.favoritesItem)"
      />
    </div>
  </div>
</template>
