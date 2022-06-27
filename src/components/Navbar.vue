<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="navbar">
    <div class="navbar__menu">
      <RouterLink to="/" class="logo">Anime-Sagasu</RouterLink>
      <!-- Accepts link anchors -->
      <slot></slot>
    </div>

    <div class="navbar__buttons">
      <a href="#" class="button">
        <Icon icon="ion:sunny" class="button-icon theme-toggle" />
      </a>
      <a href="github.com" class="button">
        <Icon icon="ion:logo-github" class="button-icon" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables.scss' as var;
@use '@/assets/mixins.scss' as mixins;

$navbar-height: 50px;
$icon-size: 1.5rem;

.navbar {
  display: flex;
  width: 100%;
  height: $navbar-height;
  padding: 20px;
  justify-content: space-between;
  background-color: var.$color-accent;

  &__menu, &__buttons {
    @include mixins.flex-center;
  }

  &__menu {
    gap: 25px;
    font-size: var.$fs-xs;

    .logo {
      font-size: var.$fs;
      padding: 10px;
    }
  }

  &__buttons {
    font-size: $icon-size;
    gap: 0 25px;

    .button {
      @include mixins.flex-center;

      .button-icon {
        opacity: 0.6;
        transition: var.$hover-transition-duration;
      }
      .button-icon:hover {
        opacity: 1.0;
        cursor: pointer;
      }

      .theme-toggle {
        font-size: calc($icon-size - 0.25rem);
      }
    }
  }
}
</style>