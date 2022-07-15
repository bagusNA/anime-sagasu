<script setup lang="ts">
// import type { Media } from '@/models/types/Media';
import { RouterLink } from 'vue-router';

defineProps<{
  title: string,
  // items: Media[],
  items: any[],
  link?: string,
  width?: string
}>();

</script>

<template>
  <div class="side-collection">
    <div class="side-collection__header">
      <p class="side-collection__header__title">{{ title }}</p>
      <RouterLink to="#" class="side-collection__header__link">
        View all
      </RouterLink>
    </div>
    <div class="side-collection__main">
      <RouterLink v-for="item in items" 
        :key="item.id"
        :to="{ name: 'anime', params: { id: item.id } }"
        class="side-collection__card"
      >
        <img 
          :src="item.coverImage.large" 
          :alt="item.title.romaji" 
          class="side-collection__card__poster"
        >

        <div class="side-collection__card__main">
          <p class="side-collection__card__title">{{ item.title.romaji }}</p>
          <span class="side-collection__card__info">{{ `${item.format}, scored ${item.averageScore ?? '-'}` }} </span>
          <span class="side-collection__card__info">{{ `${item.popularity} members` }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

$border-radius: 5px;

.side-collection {
  width: 100%;
  padding-bottom: 10px;
  border: 2px solid var.$color-primary;
  border-radius: $border-radius;
  background-color: var.$color-accent;
  overflow: hidden;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-bottom: 10px;
    color: var.$color-accent;
    background-color: var.$color-primary;

    &__title {
      max-width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__link {
      @include mixins.flex-center;
      font-size: var.$fs-xs;
      color: rgba($color: var.$color-accent, $alpha: 0.75);
      transition: 100ms;

      &:hover {
        color: rgba($color: var.$color-accent, $alpha: 1.0)
      }
    }
  }

  &__main {
    @include mixins.flex-column;
    gap: 10px 0;
  }

  &__card {
    display: flex;
    height: 100px;
    padding-right: 10px;
    margin-left: 10px;
    gap: 0 15px;
    cursor: pointer;
    transition: 100ms;
    font-size: var.$fs-sm;

    &__poster {
      height: 100%;
      border-radius: 5px;
      aspect-ratio: 3/4;
      object-fit: cover;
      transition: 100ms;
    }

    &__main {
      @include mixins.flex-column;
      flex-grow: 1;
    }

    &__title {
      @include mixins.line-clamp;
      margin-bottom: 5px;
    }

    &__info {
      font-size: var.$fs-xs;
      color: rgba($color: #000000, $alpha: 0.75);
    }

    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);

      & > .side-collection__card__poster {
        filter: brightness(0.75);
      }
    }

    &:first-of-type {
      color: var.$color-primary;
      font-size: var.$fs;
    }
  }
}
</style>