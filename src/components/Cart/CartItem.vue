<script setup>
import { defineProps, ref } from 'vue'

import { useCartStore } from '@/store/cart.js'
import { useSneakersStore } from '@/store/sneakers.js'
const cartStore = useCartStore()
const sneakersStore = useSneakersStore()

const { getCartList, deleteCartDetail } = cartStore
const { updateSneakers } = sneakersStore

const props = defineProps({
  cartItem: Object
})

const closeImage = ref('/close.svg')

const onHandleDeleteFromCart = async (cartItem) => {
  await deleteCartDetail(cartItem.id)

  await updateSneakers(cartItem.id - 1, {
    isAdded: false
  })
  await getCartList()
}
</script>

<template>
  <div class="w-72 border border-gray-200 rounded-3xl cursor-pointer transition hover:shadow-xl">
    <img class="w-72 h-72 rounded-3xl" :src="props.cartItem.imageUrl" alt="sneaker" />
    <p class="mt-2 px-6">{{ props.cartItem.title }}</p>
    <div class="flex justify-between my-2 px-6">
      <div>
        <p class="text-gray-400">Цена:</p>
        <p class="font-bold">{{ props.cartItem.price }} тг.</p>
      </div>
      <img :src="closeImage" alt="close" @click="onHandleDeleteFromCart(props.cartItem)" />
    </div>
  </div>
</template>
