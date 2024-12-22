<script setup>
import store from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../helpers/api/fetchMethods'
import { URL_STUDENTS } from '../helpers/constants/endpoints'

const route = useRoute()
const studentId = route.params.id
const studentData = ref()

onMounted(async () => {
  try {
    const url = `${URL_STUDENTS}/${studentId}`
    const response = await getData(url)
    // console.log(response.rows)

    if (response?.studentData) {
      studentData.value = response.studentData
    }
  } catch (error) {
    console.error('Error fetching students data:', error)
  }
})
</script>
<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold text-gray-300 mb-5">Student Details</h1>

    <div v-if="studentData" class="overflow-x-auto m-5 text-yellow-300 lg:w-2/4 p-3">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-gray-100 text-black">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Field</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in studentData[0]" :key="key">
            <td class="border border-gray-300 px-4 py-2 font-medium capitalize">
              {{ key }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p class="text-gray-500">Loading student data...</p>
    </div>
  </div>
</template>
