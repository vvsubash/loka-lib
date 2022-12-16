<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>{{dataFromServer[0]}}</h1>
  </div>
</template>
<script setup lang="ts">
const dataFromServer = await $fetch('/api/books')

</script>