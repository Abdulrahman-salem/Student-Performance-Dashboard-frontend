<script setup>
import store from '../stores'
import { computed } from 'vue'
import Pagination from './Pagination.vue'
import { RouterLink } from 'vue-router'

const studentsDataPage = computed(() => store.getters.getPageData(store.state.currentPage))
const handleClickStudent = () => {}
</script>

<template>
  <section v-if="studentsDataPage" class="text-white m-5 flex flex-col">
    <h1 class="px-5 pb-3">Students</h1>
    <ul class="flex flex-wrap gap-1 justify-center sm:flex-row content-center flex-col">
      <li
        v-for="(student, index) in studentsDataPage.studentsData"
        :key="index"
        class="border-2 w-1/2 sm:w-1/3 flex-12"
      >
        <RouterLink :to="`/student/${student.id}`">
          <!-- <button class="p-5 w-full" @click="handleClickStudent">{{ student.id }}</button> -->
          <button class="p-5 w-full">{{ student.id }}</button>
        </RouterLink>
      </li>
    </ul>
    <Pagination />
  </section>
</template>
