<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Media } from '@/models/types/Media';
import { categories as importedCategories } from '@/models/categories';
import type { Category } from '@/models/types/Category';

const route = useRoute();
const categories = importedCategories;
const result = ref<Media[]>([]);

const findCategory = (id: number): Category => {
  const category = categories.find(cat => cat.id === id);
  
  // Use default category (all) if not found
  return (category !== undefined) ? category : categories[0];
}

watch(
  () => route.query,
  async () => {
    result.value = [];

    const categoryId = parseInt(route.query.cat as string);
    const category = findCategory(categoryId);

    result.value = await category.search(route.query.q);
  }
);

</script>

<template>
  <div class="search">
    {{ route.query.q }}
    Cat: {{ route.query.cat }}
    <div 
      v-if="result !== []"
      class="test"
    >
      <img 
        v-for="item in result"
        :src="item.images?.jpg?.image_url!"
        :alt="item.title"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>