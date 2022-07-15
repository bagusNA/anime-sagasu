<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

import Anime from '@/models/Anime';
import BaseSection from '@/components/layouts/sections/BaseSection.vue';

const route = useRoute();
const id = parseInt(route.params.id as string);
const data = Anime.getAnimeFullById(id);
const media = computed(() => data.value ? data.value.Media : null);
</script>

<template>
  <template v-if="media">
    <div 
      class="banner" 
      :style="{ backgroundImage: `url(${media.bannerImage})` }"
    >
    </div>
    <div class="container">
      <div class="header">
        <div class="header__poster">
          <img 
            :src="media.coverImage.large" 
            :alt="`${media.title.romaji} Poster`"
            class="header__poster__image"
          >
        </div>
        <div class="header__content">
          <h1 class="title">{{ media.title.romaji }}</h1>
          <div class="stats">
            <p class="stats__score">
              <Icon icon="ion:star" />
              {{ media.averageScore ?? '-' }}
            </p>
            <p class="stats__members">{{ media.popularity }} users</p>
            <!-- <p>Ranked #{{ data.rank ?? ' -' }}</p> -->
            <p v-if="media.season && media.seasonYear">
              {{ `${media.season} ${media.seasonYear}` }}
            </p>
            <p v-else>-</p>
            <p>{{ media.format }}</p>
            <p v-if="media.episodes">
              {{ media.episodes }} Episode{{ media.episodes! > 1 ? 's' : ''}}
            </p>
            <p v-else>-</p>
          </div>
        </div>
      </div>

      <div class="content">
        <BaseSection title="Description">
          <p v-html="media.description"></p>
        </BaseSection>
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.banner {
  height: 150px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.65);
}

.container {
  @include mixins.container;
}

.header {
  display: flex;
  margin-bottom: 15px;

  &__poster {
    display: flex;
    align-items: flex-end;
    margin-top: -75px;

    &__image {
      width: 110px;
      border-radius: 5px;
      aspect-ratio: 3/4;
      object-fit: cover;
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