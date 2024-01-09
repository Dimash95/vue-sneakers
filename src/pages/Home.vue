<script setup>
import axios from 'axios'
import { ref } from 'vue'

const sneakers = ref([])

const getSneakers = async () => {
  const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/sneakers-list')
  console.log(response.data)
  sneakers.value = response.data
}
getSneakers()
</script>

<template>
  <div class="py-10">
    <video class="m-auto" width="700" height="600" autoplay loop muted>
      <source src="../../public/video.mp4" type="video/mp4" />
    </video>
    <div class="mt-20 mx-10">
      <h1 class="text-3xl font-bold">Все кроссовки</h1>
      <input type="text" />
    </div>
    <div class="flex flex-wrap justify-between gap-10 mx-10">
      <div class="w-64 border border-gray-200 rounded-3xl p-6 cursor-pointer transition hover:shadow-xl" v-for="sneaker in sneakers" :key="sneaker.id">
        <img class="w-40 h-40" :src="sneaker.imageUrl" alt="sneaker" />
        <p>{{ sneaker.title }}</p>
        <div class="flex justify-between">
          <div>
            <p class="text-gray-400">Цена:</p>
            <p class="font-bold">{{ sneaker.price }} тг.</p>
          </div>
          <img src="../../public/plus.svg" alt="plus" />
        </div>
      </div>
    </div>
  </div>
</template>
