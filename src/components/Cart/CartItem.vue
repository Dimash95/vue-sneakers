<script setup>
import { defineProps, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  cartItem: Object
})

const closeImage = ref('/close.svg')

const onHandleDeleteFromCart = async (cartItem) => {
  await axios({
    method: 'delete',
    url: `https://b1364cf1f3ab4cd9.mokky.dev/cart-list/${cartItem.id}`
  })
  await axios({
    method: 'patch',
    url: `https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/${cartItem.id - 1}`,
    data: {
      isAdded: false
    }
  })
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
