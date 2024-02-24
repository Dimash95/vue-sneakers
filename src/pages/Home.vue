<script setup>
import SneakersList from '@/components/Home/SneakersList.vue'
import Video from '@/components/Home/Video.vue'
</script>

<template>
  <div class="py-10">
    <Video />
    <div class="flex justify-between items-center mt-20 mx-10">
      <h1 class="text-3xl font-bold">Все кроссовки</h1>
      <label class="form-control w-full max-w-xs">
        <input type="text" placeholder="Search..." class="input input-bordered w-full max-w-xs" />
      </label>
    </div>
    <SneakersList />
  </div>
</template>
