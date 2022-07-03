<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Anime from '@/models/Anime';
import type { Anime as IAnime} from '@/models/types/Anime';

const route = useRoute();
const id = parseInt(route.params.id as string);
const data = ref<IAnime>(await (await Anime.getAnimeFullById(id)).data);

</script>

<template>
 <div class="anime-container">
    <div class="header-wrap">
      <div class="banner">
        
      </div>
      <div class="header">

      </div>
    </div>
    <div class="content">
      <aside class="content__aside">

      </aside>
      <div class="content__main">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>