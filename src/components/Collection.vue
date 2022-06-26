<script setup lang="ts">
import type { Media } from '@/models/types/Media';
import Card from './Card.vue';

const { items } = defineProps<{
  title: string,
  items: Media[],
  href?: string
}>();

const slicedItems = items.slice(0, 10);

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
    <div class="collection__main">
      <Card 
        v-for="item in slicedItems" :key="item.mal_id" 
        :title="item.title"
        :image="item.images?.jpg?.image_url!"
        class="collection__main__item"
      />
      
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/mixins.scss' as mixins;
@use '@/assets/variables' as var;

// .collection {
//   @include mixins.flex-column;
//   // width: 100%;

//   &__top {
//     display: flex;
//     justify-content: space-between;

//     &__title {
//       font-size: var.$fs-lg;
//     }
//   }

//   &__main {
//     display: flex;
//     flex-wrap: nowrap;
//     overflow-x: scroll;
//     gap: 10px;
    
//   }
// }



.collection {
  @include mixins.flex-column;

  &__top {
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: var.$fs-lg;
    }
  }

  &__main {
    display: grid;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    justify-content: space-between;
  }
}

@media only screen and (min-width: 768px) {
  .collection {
    &__main {
      grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    }
  }
}

@media only screen and (min-width: 1024px) {
  .collection {
    &__main {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
}

@media only screen and (min-width: 1280px) {
  .collection {
    &__main {
      grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    }
  }
}
</style>