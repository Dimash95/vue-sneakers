<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import CartItem from '@/components/Cart/CartItem.vue'

import { useCartStore } from '@/store/cart.js'
const cartStore = useCartStore()
const { getCartList } = cartStore
const { cartList } = storeToRefs(cartStore)

onMounted(() => {
  getCartList()
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
