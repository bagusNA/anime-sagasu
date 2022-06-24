<script setup lang="ts">
import { ref } from 'vue';
import { categories as defaultCategories } from './models/categories';

import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';

const searchQuery = ref('');
const categories = ref({
  selectedId: 0,
  list: defaultCategories
});


function test() {
  console.log(searchQuery.value)
}
</script>

<template>
  <Navbar>
    <a href="#">Browse</a>
    <a href="#">Top</a>
    <a href="#">Seasonal</a>
  </Navbar>

  <Search 
    v-model:search="searchQuery"
    v-model:selectedCategory="categories.selectedId"
    :categories="categories.list"
    :action="test"
  />

</template>

<style lang="scss">
@use '@/assets/base.scss';
</style>