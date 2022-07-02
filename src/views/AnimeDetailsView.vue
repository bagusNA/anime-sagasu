<script setup lang="ts">
import { useRoute } from 'vue-router';
// import Anime from "@/models/Anime";

const route = useRoute();
const id = parseInt(route.params.id as string);
console.log(id)
// const data = ref(await Anime.getAnimeFullById(id));
</script>

<template>
  <div>
    {{ id }}
  </div>
</template>

<style scoped lang="scss">

</style>