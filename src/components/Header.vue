<script setup></script>

<template>
  <div class="flex items-center justify-between py-6">
    <router-link class="flex items-center gap-2" to="/">
      <img class="w-16 h-16" src="../../public/logo.png" alt="Logo" />
      <div>
        <h3 class="font-bold">REACT SNEAKERS</h3>
        <p class="text-sm text-gray-400">Магазин лучших кроссовок</p>
      </div>
    </router-link>
    <ul class="flex gap-8">
      <li><router-link to="/about">1205 руб.</router-link></li>
      <li><router-link to="/favorites">Закладки</router-link></li>
      <li><router-link to="/profile">Профиль</router-link></li>
    </ul>
  </div>
</template>
