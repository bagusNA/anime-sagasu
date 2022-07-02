<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import type { Media } from '@/models/types/Media';
import type { Category } from '@/models/types/Category';
import { categories as importedCategories } from '@/models/categories';

import Card from '@/components/Card.vue';

const route = useRoute();
const categories = importedCategories;
const result = ref<Media[]>([]);

const findCategory = (id: number): Category => {
  const category = categories.find(cat => cat.id === id);
  
  // Use default category (all) if not found
  return category ?? categories[0];
}

const searchAction = async () => {
  result.value = [];

  const categoryId = parseInt(route.query.cat as string);
  const category = findCategory(categoryId);

  result.value = await category.search(route.query.q as string);
}

searchAction();

watch(
  () => route.query,
  async () => {
    searchAction();
  }
);

</script>

<template>
  <div class="result">
    <template v-if="result !== []">
      <!-- WIP: Change RouterLink target based on category -->
      <RouterLink
        v-for="item in result"
        :to="{ name: 'anime', params: { id: item.mal_id } }"
      >
        <Card 
          :title="item.title"
          :image="item.images?.jpg?.image_url!"
        />
      </RouterLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

.result {
  display: grid;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  justify-content: space-between;
}

@media only screen and (min-width: 768px) {
  .result {
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    gap: 15px;
  }
}

@media only screen and (min-width: 1024px) {
  .result {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
}

@media only screen and (min-width: 1280px) {
  .result {
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 20px;
  }
}
</style>