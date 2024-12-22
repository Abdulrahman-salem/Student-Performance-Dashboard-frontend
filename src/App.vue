<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import store from './stores'
import NavbarPages from './components/NavbarPages.vue'
import { URL_STUDENTS } from './helpers/constants/endpoints'
import { getData } from './helpers/api/fetchMethods'
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    const response = await getData(URL_STUDENTS)
    // console.log(response.rows)

    if (response.studentsData) {
      store.dispatch('setFirstPage', response)
    }
  } catch (error) {
    console.error('Error fetching students data:', error)
  }
})
</script>

<template>
  <div class="app-wrapper min-h-dvh bg-neutral-900">
    <header class="px-4 py-1">
      <NavbarPages />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
