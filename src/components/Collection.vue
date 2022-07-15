<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useKeenSlider } from "keen-slider/vue.es";

// import type { Media } from '@/models/types/Media';
import Card from './Card.vue';

const { items } = defineProps<{
  title: string,
  // items: Media[],
  items: any[]
  href?: string
}>();

const [sliderContainer] = useKeenSlider({
  renderMode: "performance",
  loop: false,
  mode: "free-snap",
  slides: {
    perView: 3,
    spacing: 10
  },
  breakpoints: {
    '(min-width: 600px)': {
      slides: { perView: 4, spacing: 10 },
      mode: "snap",
    },
    '(min-width: 768px)': {
      slides: { perView: 5, spacing: 15 },
      mode: "snap",
    },
    '(min-width: 1024px)': {
      slides: { perView: 6, spacing: 20 },
      mode: "snap",
    },
    '(min-width: 1280px)': {
      slides: { perView: 7, spacing: 20 },
      mode: "snap",
    },
  }
})

</script>

<template>
  <div class="collection">
    <div class="collection__top">
      <p class="collection__top__title">{{ title }}</p>
      <a 
        v-if="href"
        :href="href" 
        class="collection__top__link"
      >
        See more
      </a>
    </div>
    <div ref="sliderContainer" class="collection__main keen-slider">
      <RouterLink
        v-for="item in items" 
        :to="{ name: 'anime', params: { id: item.id } }"
      >
        <Card 
          :title="item.title.romaji"
          :image="item.coverImage.large"
          class="keen-slider__slide"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/mixins.scss' as mixins;
@use '@/assets/variables' as var;
@import url('keen-slider/keen-slider.min.css');

.collection {
  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    &__title {
      font-size: var.$fs;
    }

    &__link {
      @include mixins.flex-center;
      font-size: var.$fs-xs;
      color: rgba($color: #000000, $alpha: 0.75);
      transition: 200ms;

      &:hover {
      color: rgba($color: #000000, $alpha: 1.0);
      }
    }
  }

  &__main {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .collection {
    &__top {
      margin-bottom: 15px;

      &__title {
        font-size: var.$fs-lg;
      }

      &__link {
        font-size: var.$fs-sm;
      }
    }
  }
}
</style>