<script setup>
import { IconHeart, IconUser, IconShoppingCart } from '@tabler/icons-vue'
</script>

<template>
  <div class="flex items-center justify-between py-6">
    <router-link class="flex items-center gap-2" to="/">
      <img class="w-16 h-16" src="/logo.png" alt="Logo" />
      <div>
        <h3 class="font-bold">VUE SNEAKERS</h3>
        <p class="text-sm text-gray-400">Shop for the best sneakers</p>
      </div>
    </router-link>
    <ul class="flex gap-8">
      <li>
        <router-link to="/cart">
          <IconShoppingCart size="30" />
        </router-link>
      </li>

      <li>
        <router-link to="/favorites"><IconHeart size="30" /></router-link>
      </li>
      <li>
        <router-link to="/profile"><IconUser size="30" /></router-link>
      </li>
    </ul>
  </div>
</template>
