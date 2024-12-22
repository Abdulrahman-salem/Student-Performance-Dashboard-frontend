<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- <nav class="bg-gray-800 text-white p-4"> -->
  <nav class="bg-gray-800 text-white flex items-center w-[92%] p-3 mx-auto justify-end rounded-sm">
    <!-- <ul class="flex items-center justify-end space-x-8 mr-6"> -->
    <ul class="flex items-center gap-[4vw]">
      <li class="text-xl hover:text-blue-400">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="text-xl hover:text-blue-400">
        <RouterLink to="/averages">Averages</RouterLink>
      </li>
    </ul>
  </nav>
</template>
