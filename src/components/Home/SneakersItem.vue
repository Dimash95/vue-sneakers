<script setup>
// import { storeToRefs } from 'pinia'
import { useSneakersStore } from '@/store/sneakers.js'
import { useCartStore } from '@/store/cart.js'
import { useFavoritesStore } from '@/store/favorites.js'

const sneakersStore = useSneakersStore()
const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

// const { sneakersDetail } = storeToRefs(sneakersStore)
const { getSneakersList, updateSneakers } = sneakersStore
const { createCartDetail, deleteCartDetail } = cartStore
const { createFavoritesDetail, deleteFavoritesDetail } = favoritesStore

const props = defineProps({
  sneakersItem: Object
})

const onHandleCart = async (sneakersItem) => {
  await updateSneakers(sneakersItem.id, {
    isAdded: !sneakersItem.isAdded
  })
  if (sneakersItem.isAdded) {
    await deleteCartDetail(sneakersItem.id + 1)
  } else {
    await createCartDetail({
      id: sneakersItem.id,
      title: sneakersItem.title,
      price: sneakersItem.price,
      imageUrl: sneakersItem.imageUrl,
      isFavorite: sneakersItem.isFavorite,
      isAdded: true
    })

    await getSneakersList()
  }
}

const onHandleWishlist = async (sneakersItem) => {
  await updateSneakers(sneakersItem.id, {
    isFavorite: !sneakersItem.isFavorite
  })

  if (sneakersItem.isFavorite) {
    await deleteFavoritesDetail(sneakersItem.id + 1)
  } else {
    await createFavoritesDetail({
      id: sneakersItem.id,
      title: sneakersItem.title,
      price: sneakersItem.price,
      imageUrl: sneakersItem.imageUrl,
      isFavorite: true,
      isAdded: sneakersItem.isAdded
    })
  }

  await getSneakersList()
}
</script>

<template>
  <div
    class="relative w-72 border border-gray-200 rounded-3xl cursor-pointer transition hover:shadow-xl"
  >
    <img class="w-72 h-72 rounded-3xl" :src="props.sneakersItem.imageUrl" alt="sneaker" />
    <img
      class="absolute top-4 right-6"
      :src="props.sneakersItem.isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="heart"
      @click="() => onHandleWishlist(props.sneakersItem)"
    />
    <p class="mt-2 px-6">{{ props.sneakersItem.title }}</p>
    <div class="flex justify-between my-2 px-6">
      <div>
        <p class="text-gray-400">Цена:</p>
        <p class="font-bold">{{ props.sneakersItem.price }} тг.</p>
      </div>
      <img
        :src="props.sneakersItem.isAdded ? '/checked.svg' : '/plus.svg'"
        alt="plus"
        @click="() => onHandleCart(props.sneakersItem)"
      />
    </div>
  </div>
</template>
