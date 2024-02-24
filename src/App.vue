<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="px-10 border-b border-gray-200">
      <Header />
    </header>

    <main class="px-10">
      <router-view></router-view>
    </main>

    <footer class="mt-auto px-10 border-t border-gray-200">
      <Footer />
    </footer>
  </div>
</template>
