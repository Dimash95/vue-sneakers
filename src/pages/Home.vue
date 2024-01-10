<script setup>
import SneakersList from '@/components/Home/SneakersList.vue'
import Video from '@/components/Home/Video.vue'
</script>

<template>
  <div class="py-10">
    <Video />
    <div class="mt-20 mx-10">
      <h1 class="text-3xl font-bold">Все кроссовки</h1>
      <input type="text" />
    </div>
    <SneakersList />
  </div>
</template>
