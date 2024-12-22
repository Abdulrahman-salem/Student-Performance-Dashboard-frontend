<script setup lang="js">
import { computed, ref } from 'vue'
import store from '../stores'
import fetchMorePage from '../helpers/api/fetchMorePage'

const currentPage = ref(store.state.currentPage)
const totalItems = ref(325)
const onClickHandler = async (e) => {
  try {
    await fetchMorePage(e)
  } catch (error) {
    console.error('Error while fetching data:', error.message)
  }
  return
}
</script>

<template>
  <section class="p-5 self-center">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
      @click="onClickHandler"
      :hide-prev-next="true"
      class="flex justify-center flex-wrap"
    />
  </section>
</template>
<style>
.pagination-container {
  display: flex;

  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;

  width: 40px;

  border-radius: 20px;

  cursor: pointer;

  background-color: rgb(242, 242, 242);

  border: 1px solid rgb(217, 217, 217);

  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;

  border: 1px solid #3498db;

  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}
</style>
