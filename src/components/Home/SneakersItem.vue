<script setup>
import { defineProps, inject, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  sneakersItem: Object
})

const getSneakers = inject('getSneakers')

const plusImage = ref('/plus.svg')
const checked = ref('/checked.svg')

const onHandleAddToCart = async (sneakersItem) => {
  await axios({
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
  await axios({
    method: 'patch',
    url: `https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/${sneakersItem.id}`,
    data: {
      isAdded: true
    }
  })
  await getSneakers()
}

const onHandleDeleteFromCart = async (sneakersItem) => {
  await axios({
    method: 'delete',
    url: `https://b1364cf1f3ab4cd9.mokky.dev/cart-list/${sneakersItem.id + 1}`
  })
  await axios({
    method: 'patch',
    url: `https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list/${sneakersItem.id}`,
    data: {
      isAdded: false
    }
  })
  await props.getSneakers()
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
