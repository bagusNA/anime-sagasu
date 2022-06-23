<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="navbar">
    <div class="menu">
      <a href="#" id="logo">Anime-Sagasu</a>
      <!-- Accepts link anchors -->
      <slot></slot>
    </div>

    <div class="buttons">
      <a href="#" class="button"><Icon icon="ion:sunny" class="button-icon" id="theme-toggle" /></a>
      <a href="github.com" class="button"><Icon icon="ion:logo-github" class="button-icon" /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as variables;
@use '@/assets/mixins.scss' as mixins;

$navbar-height: 50px;

.navbar {
  display: flex;
  width: 100%;
  height: $navbar-height;
  padding: 20px;
  justify-content: space-between;
  background-color: variables.$color-accent;

  .menu, .buttons {
    @include mixins.flex-center;
  }

  .menu {
    gap: 25px;

    #logo {
      font-size: 1.5rem;
      padding: 10px;
    }
  }

  .buttons {
    font-size: 2rem;
    gap: 0 25px;

    .button {
      @include mixins.flex-center;

      .button-icon {
        opacity: 0.6;
        transition: variables.$hover-transition-duration;
      }
      .button-icon:hover {
        opacity: 1.0;
        cursor: pointer;
      }

      #theme-toggle {
        font-size: 1.5rem;
      }
    }
  }
}

</style>