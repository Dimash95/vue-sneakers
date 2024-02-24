<script setup>
const onHandleChangeMute = () => {
  const video = document.querySelector('video')
  video.muted = !video.muted
}
</script>

<template>
  <div class="flex items-end justify-center gap-2">
    <video class="rounded-3xl ml-20" width="900" height="600" autoplay loop muted>
      <source src="/video-2.mp4" type="video/mp4" />
    </video>
    <button @click="onHandleChangeMute">
      <img
        class="w-20 h-20 rounded-full"
        src="https://img.freepik.com/free-psd/headphone-headset-icon-isolated-3d-render-illustration_439185-12417.jpg?size=626&ext=jpg&ga=GA1.1.1993596534.1704884211&semt=sph"
        alt=""
      />
    </button>
  </div>
</template>
