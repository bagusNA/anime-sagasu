<script setup lang="ts">

</script>

<template>
  <div class="home">
    <section class="home__main">
      <div class="test-box">a</div>
    </section>
    <aside class="home__side-content">
      <div class="test-box">a</div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/mixins.scss' as mixins;

.home {
  display: flex;
  width: 100%;
  height: 100%;

  &__main {
    @include mixins.flex-column;
    flex-grow: 1;
  }

  &__side-content {
    display: none;
    width: 25%;
  }
}

.test-box {
  height: 400px;
  width: 100%;
  border-radius: 10px;
  background-color: salmon;
}

@media only screen and (min-width: 600px) {
  .home {
    &__side-content {
      @include mixins.flex-column;
    }
  }
}

</style>