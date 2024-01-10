<script setup>
import { defineProps, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  sneakersItem: Object
})

const plusImage = ref('../../../public/plus.svg')

const onHandleAddToCart = (sneakersItem) => {
  axios({
    method: 'post',
    url: 'https://b1364cf1f3ab4cd9.mokky.dev/cart-list',
    data: {
      id: sneakersItem.id,
      title: sneakersItem.title,
      price: sneakersItem.price,
      imageUrl: sneakersItem.imageUrl,
      isFavorite: sneakersItem.isFavorite,
      isAdded: true
    }
  })
  plusImage.value = '../../../public/checked.svg'
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
      <img :src="plusImage" alt="plus" @click="() => onHandleAddToCart(props.sneakersItem)" />
    </div>
  </div>
</template>
