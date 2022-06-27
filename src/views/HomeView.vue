<script setup lang="ts">
import Collection from '@/components/Collection.vue';
import Season from '@/models/Season';

const {data, error} = await Season.getSeasonNow();
const slicedItems = data.data.slice(0,7)

</script>

<template>
  <div class="home">
    <section class="home__main">
      <Collection title="This Season" :items="slicedItems" href="#" />
      <Collection title="This Season" :items="slicedItems" href="#" />
      <Collection title="This Season" :items="slicedItems" href="#" />
    </section>
    <aside class="home__side-content">
      <div class="test-box">a</div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

.home {
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 0 10px;
  gap: 0 10px;

  &__main {
    @include mixins.flex-column;
    width: 100%;
    padding: 20px 25px;
    gap: 20px 0;
    border-radius: 10px;
    background-color: var.$color-accent;
  }

  &__side-content {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .home {
    &__main {
      width: 75%;
    }

    &__side-content {
      @include mixins.flex-column;
      width: 25%;
    }
  }
}

</style>