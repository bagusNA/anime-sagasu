<script setup lang="ts">
defineProps<{
  query?: string,
  cat?: number
}>();

</script>

<template>
  <div class="search">
    {{ query }}
  </div>
</template>

<style scoped lang="scss">

</style>