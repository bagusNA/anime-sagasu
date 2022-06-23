<script setup lang="ts">
import { Icon } from '@iconify/vue';

// temporary
const categories = [
  {
    name: 'All',
    id: 0
  },
  {
    name: 'Anime',
    id: 1,
  },
  {
    name: 'Manga',
    id: 2,
  },
  {
    name: 'Light Novel',
    id: 3,
  }
];

interface Props {
  modelValue: string,
  action: any
}

const { action } = defineProps<Props>();
defineEmits(['update:modelValue']);

function enterKeyAction(e: KeyboardEvent) {
  if (e.key === "Enter") action();
}

</script>

<template>
  <div class="search">
    <div class="category">
      <template v-for="category in categories" :key="category.id">
        <input 
          type="radio" 
          name="category"
          class="category__input"
          :id="category.name" 
          :value="category.name"
        >
        <label 
          :for="category.name"
          class="category__label"
        >
          {{ category.name }}
        </label>
      </template>
    </div>
    <div class="search__bar">
      <input 
        type="text" 
        id="search-input"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @keydown="enterKeyAction"
      >
      <button>
        <Icon icon="ion:search" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as variables;
@use '@/assets/mixins.scss' as mixins;

.search {
  @include mixins.flex-center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;

  .category {
    display: inline-flex;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.5);

    .category__input {
      display: none;

      &:checked + .category__label {
        background-color: variables.$color-primary-2;
      }
    }

    .category__label {
      padding: 5px 14px;
      font-size: 1.15rem;
      background-color: variables.$color-primary-1;
      cursor: pointer;
      user-select: none;
      transition: background 0.15s;

      &:not(:last-of-type) {
        border-right: 1px solid variables.$color-primary-2;
      }
    }
  }
}
</style>