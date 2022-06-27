<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import { categories as defaultCategories } from './models/categories';

import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';
import Anime from './models/Anime';

const searchQuery = ref('');
const categories = ref({
  selectedId: 0,
  list: defaultCategories
});

async function test() {
  const {data, error} = await Anime.getSearch('Golden');
  console.log(data);
  console.log(error);
}
</script>

<template>
  <Navbar>
    <!-- <a href="">Browse</a> -->
    <RouterLink to="/search">Browse</RouterLink>
    <a href="#">Top</a>
    <a href="#">Seasonal</a>
  </Navbar>

  <Search 
    v-model:search="searchQuery"
    v-model:selectedCategory="categories.selectedId"
    :categories="categories.list"
    :action="test"
  />

  <Suspense>
    <RouterView></RouterView>
  </Suspense>

</template>

<style lang="scss">
@use '@/assets/base.scss';
</style>