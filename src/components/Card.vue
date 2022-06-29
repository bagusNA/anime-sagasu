<script setup lang="ts">
defineProps<{
  title: string,
  image: string
}>();
</script>

<template>
  <div class="card">
    <img :src="image" :alt="title" class="card__poster">
    <p class="card__title">{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.card {
  &__poster {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.5);
  }

  &__title {
    @include mixins.line-clamp;
    color: rgba($color: #000000, $alpha: 0.75);
    font-size: var.$fs-sm;
    font-weight: 400;
  }
}
</style>