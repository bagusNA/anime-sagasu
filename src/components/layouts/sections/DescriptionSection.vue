<script setup lang="ts">
import BaseSection from './BaseSection.vue';

defineProps<{
  synopsis?: string | null,
  background?: string | null
}>();

</script>

<template>
  <BaseSection title="Description">
    <p v-if="!(synopsis || background)">
      -
    </p>

    <template v-if="synopsis">
      <h5 class="subtitle">Synopsis</h5>
      <p>{{ synopsis }}</p>
    </template>

    <template v-if="background">
      <h5 class="subtitle">Background</h5>
      <p>{{ background }}</p>
    </template>
  </BaseSection>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;

.subtitle {
  color: var.$color-primary;
  font-size: var.$fs-xs;

  &:last-of-type:not(&:first-of-type) {
    margin-top: 10px;
  }
}
</style>