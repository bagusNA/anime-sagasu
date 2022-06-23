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
@use '@/assets/variables.scss' as global;

$navbar-height: 50px;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  display: flex;
  width: 100%;
  height: $navbar-height;
  padding: 20px;
  justify-content: space-between;
  background-color: global.$color-accent;

  .menu, .buttons {
    @include flex-center;
  }

  .menu {
    gap: 20px;

    #logo {
      font-size: 1.5rem;
      padding: 15px;
    }
  }

  .buttons {
    font-size: 2rem;
    gap: 0 25px;

    .button {
      @include flex-center;

      .button-icon {
        opacity: 0.6;
        transition: global.$hover-transition-duration;
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