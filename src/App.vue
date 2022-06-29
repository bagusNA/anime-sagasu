<script setup lang="ts">
import { ref, unref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import router from './router';
import { categories as defaultCategories } from './models/categories';

import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';
import Search from './components/Search.vue';

const searchQuery = ref('');
const categories = ref({
  selectedId: 0,
  list: defaultCategories
});

async function searchAction() {
  router.push({
    name: "search",
    query: {
      q: unref(searchQuery),
      cat: unref(categories).selectedId
    }
  })
}
</script>

<template>
  <div class="container">
    <Navbar>
      <RouterLink :to="{ name: 'search' }">Browse</RouterLink>
      <a href="#">Top</a>
      <a href="#">Seasonal</a>
    </Navbar>

    <Search 
      v-model:search="searchQuery"
      v-model:selectedCategory="categories.selectedId"
      :categories="categories.list"
      :action="searchAction"
    />

    <div class="view-container">
      <Suspense>
        <RouterView></RouterView>
      </Suspense>
    </div>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@use '@/assets/base.scss';
@use '@/assets/mixins.scss' as mixins;

.container {
  @include mixins.flex-column;
  min-height: 100vh;
}

.view-container {
  flex-grow: 1;
}
</style>