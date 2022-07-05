<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

import Anime from '@/models/Anime';
import type { Anime as IAnime} from '@/models/types/Anime';

const route = useRoute();
const id = parseInt(route.params.id as string);
const data = ref<IAnime>(await (await Anime.getAnimeFullById(id)).data);

console.log(data.value)

</script>

<template>
  <div 
    class="banner" 
    :style="{ backgroundImage: `url(${data.images?.jpg?.large_image_url!})` }"
  >
  </div>
  <div class="container">
    <div class="header">
      <div class="header__poster">
        <img 
          :src="data.images?.jpg?.large_image_url!" 
          :alt="data.title + ' Poster'"
          class="header__poster__image"
        >
      </div>
      <div class="header__content">
        <h1 class="title">{{ data.title }}</h1>
        <div class="stats">
          <p class="stats__score">
            <Icon icon="ion:star" />
            {{ data.score ?? '-' }}
          </p>
          <p class="stats__members">{{ data.members }} users</p>
          <p>Ranked #{{ data.rank ?? ' -' }}</p>
          <p v-if="data.season && data.year">
            {{ `${data.season} ${data.year}` }}
          </p>
          <p v-else>-</p>
          <p>{{ data.type }}</p>
          <p v-if="data.episodes">
            {{ data.episodes }} Episode{{ data.episodes! > 1 ? 's' : ''}}
          </p>
          <p v-else>-</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.banner {
  height: 150px;
  background-size: cover;
  filter: brightness(0.75);
}

.container {
  @include mixins.container;
}

.header {
  display: flex;

  &__poster {
    display: flex;
    align-items: flex-end;
    margin-top: -75px;

    &__image {
      width: 110px;
      border-radius: 5px;
    }
  }

  &__content {
    @include mixins.flex-column;
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
  }
}

.stats {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  font-size: var.$fs-2xs;
  text-transform: capitalize;

  &__score {
    display: flex;
    align-items: center;
    gap: 0 5px;
    font-size: var.$fs-xs;
    font-weight: bold;
  }

  &__members {
    font-size: var.$fs-2xs;
  }
}

.title {
  @include mixins.line-clamp;
  font-size: var.$fs-sm;
  margin-bottom: 5px;
}

</style>