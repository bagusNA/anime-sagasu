<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Category } from '@/models/types/Category';

interface Props {
  search: string,
  selectedCategory: number,
  categories: Category[],
  action: any
}

const { action } = defineProps<Props>();
defineEmits(['update:search', 'update:selectedCategory']);

const enterKeyAction = (e: KeyboardEvent) => {
  if (e.key === "Enter") action();
}

</script>

<template>
  <div class="search">
    <div class="search__category">
      <template v-for="category in categories" :key="category.id">
        <input 
          type="radio" 
          name="category"
          class="search__category__input"
          :id="category.name" 
          :value="category.id"
          :checked="selectedCategory === category.id"
          @change="$emit(
            'update:selectedCategory', 
            parseInt(($event.target as HTMLInputElement).value)
          )"
        >
        <label 
          :for="category.name"
          class="search__category__label"
        >
          {{ category.name }}
        </label>
      </template>
    </div>
    <div class="search__bar">
      <input 
        type="text" 
        class="search__bar__input"
        placeholder="Start searching!"
        :value="search"
        @keydown="enterKeyAction"
        @input="$emit(
          'update:search', 
          ($event.target as HTMLInputElement).value
        )"
      >
      <button 
        class="search__bar__button"
        @click="action"
      >
        <Icon icon="ion:search" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.search {
  @include mixins.flex-center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  gap: 15px 0;

  &__category {
    display: flex;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.5);

    &__input {
      display: none;

      &:checked + .search__category__label {
        color: var.$color-accent;
        background-color: var.$color-primary;
      }
    }

    &__label {
      padding: 5px 10px;
      font-size: var.$fs-sm;
      color: var.$color-primary;
      background-color: var.$color-accent;
      cursor: pointer;
      user-select: none;
      transition: background 0.15s;

      &:not(:last-of-type) {
        border-right: transparent;
      }

      &:hover {
        color: var.$color-accent;
        background-color: rgba($color: var.$color-primary, $alpha: 0.8);
      }
    }
  }

  &__bar {
    display: flex;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.5);
    padding: 6px;

    &__input {
      @include mixins.remove-appearance;
      width: 80vw;
      padding: 0 15px;
      font-size: var.$fs;
    }

    &__button {
      @include mixins.flex-center;
      @include mixins.remove-appearance;
      color: var.$color-accent;
      background-color: var.$color-primary;
      border-radius: 100%;
      height: 1.75rem;
      width: 1.75rem;
      font-size: 1.1rem;
      box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.5);
      cursor: pointer;
      transition: 0.1s;

      &:hover {
        color: var.$color-primary;
        background-color: var.$color-accent;
      }
    }
  }
}

@media only screen and (min-width: 600px) {
  .search__category__label {
    padding: 5px 12px;
  }
}

@media only screen and (min-width: 768px) {
  .search__category__label {
    padding: 5px 14px;
  }
  
  .search__bar__input {
    width: 50vw;
  }
}

@media only screen and (min-width: 1024px) {
  .search__bar__input {
    width: 40vw;
  }
}

@media only screen and (min-width: 1280px) {
  .search__bar__input {
    width: 30vw;
  }
}
</style>