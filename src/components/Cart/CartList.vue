<script setup>
import { ref, onMounted } from 'vue'
import CartItem from '@/components/Cart/CartItem.vue'
import axios from 'axios'

const cartList = ref([])

const getCart = async () => {
  const response = await axios.get('https://b1364cf1f3ab4cd9.mokky.dev/cart-list')
  cartList.value = response.data
}

onMounted(() => {
  getCart()
})
</script>

<template>
  <div>
    <div v-if="cartList.length > 0" class="flex flex-wrap justify-between gap-10 mt-10 mx-10">
      <h1 class="text-2xl font-bold">Cart</h1>
      <CartItem v-for="cartItem in cartList" :key="cartItem.id" :cartItem="cartItem" />
    </div>
    <div v-else class="flex flex-col items-center justify-center mt-20">
      <p class="text-2xl font-bold">Cart is empty</p>
      <img src="/package-icon.png" alt="package" class="w-40 h-40 mt-10" />
    </div>
  </div>
</template>
