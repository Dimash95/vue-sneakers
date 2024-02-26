<script setup>
import { ref } from 'vue'

// import { storeToRefs } from 'pinia'
import { useSneakersStore } from '@/store/sneakers.js'
import { useCartStore } from '@/store/cart.js'
const sneakersStore = useSneakersStore()
const cartStore = useCartStore()

// const { sneakersDetail } = storeToRefs(sneakersStore)
const { getSneakersList, updateSneakers } = sneakersStore
const { createCartDetail, deleteCartDetail } = cartStore

const props = defineProps({
  sneakersItem: Object
})

const plusImage = ref('/plus.svg')
const checked = ref('/checked.svg')

const onHandleAddToCart = async (sneakersItem) => {
  await createCartDetail({
    id: sneakersItem.id,
    title: sneakersItem.title,
    price: sneakersItem.price,
    imageUrl: sneakersItem.imageUrl,
    isFavorite: sneakersItem.isFavorite,
    isAdded: true
  })

  await updateSneakers(sneakersItem.id, {
    isAdded: true
  })

  await getSneakersList()
}

const onHandleDeleteFromCart = async (sneakersItem) => {
  await deleteCartDetail(sneakersItem.id + 1)
  await updateSneakers(sneakersItem.id, {
    isAdded: false
  })
  await getSneakersList()
}
</script>

<template>
  <div class="w-72 border border-gray-200 rounded-3xl cursor-pointer transition hover:shadow-xl">
    <img class="w-72 h-72 rounded-3xl" :src="props.sneakersItem.imageUrl" alt="sneaker" />
    <p class="mt-2 px-6">{{ props.sneakersItem.title }}</p>
    <div class="flex justify-between my-2 px-6">
      <div>
        <p class="text-gray-400">Цена:</p>
        <p class="font-bold">{{ props.sneakersItem.price }} тг.</p>
      </div>
      <img
        :src="props.sneakersItem.isAdded ? checked : plusImage"
        alt="plus"
        @click="
          () =>
            props.sneakersItem.isAdded
              ? onHandleDeleteFromCart(props.sneakersItem)
              : onHandleAddToCart(props.sneakersItem)
        "
      />
    </div>
  </div>
</template>
