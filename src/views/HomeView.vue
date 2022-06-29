<script setup lang="ts">
import Collection from '@/components/Collection.vue';
import SideCollection from '@/components/SideCollection.vue';
import Season from '@/models/Season';

const {data, error} = await Season.getSeasonNow();
const slicedItems = data.data.slice(0,10)

</script>

<template>
  <div class="home">
    <section class="home__main">
      <Collection title="This Season" :items="slicedItems" href="#" />
      <Collection title="This Season" :items="slicedItems" href="#" />
      <Collection title="This Season" :items="slicedItems" href="#" />
    </section>
    <aside class="home__side-content">
      <SideCollection title="TestTestTestTestTestTestTestTest" :items="slicedItems.slice(0, 3)" />
      <SideCollection title="Test" :items="slicedItems.slice(3, 6)" />
      <SideCollection title="Test" :items="slicedItems.slice(6, 9)" />
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.home {
  display: flex;
  width: 95vw;
  height: 100%;
  padding: 0 10px;
  margin: auto;
  gap: 0 10px;
  justify-content: center;

  &__main {
    @include mixins.flex-column;
    width: 100%;
    max-width: 1000px;
    padding: 20px 25px;
    gap: 20px 0;
    border-radius: 10px;
    background-color: var.$color-accent;
  }

  &__side-content {
    display: none;
    gap: 15px 0;
    max-width: 400px;
  }
}

@media only screen and (min-width: 768px) {
  .home {
    &__main {
      width: 65%;
    }

    &__side-content {
      @include mixins.flex-column;
      width: 35%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    &__main {
      width: 70%;
    }

    &__side-content {
      @include mixins.flex-column;
      width: 30%;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .home {
    &__main {
      width: 70%;
    }

    &__side-content {
      @include mixins.flex-column;
      width: 30%;
    }
  }
}
</style>