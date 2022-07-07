<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__main">
        Created by 
        <a href="https://github.com/bagusNA" class="footer__link" target="_blank">
          Bagus Nur A.
          <sup><Icon icon="lucide:external-link" class="footer__icon" /></sup>
        </a>
      </p>
      <p class="footer__sub">
        This project is created in my spare time and intended as a fun project for learning Vue. You can find the source code on 
        <a href="https://github.com/bagusNA/anime-sagasu" class="footer__link" target="_blank">
          <Icon icon="ion:logo-github" class="footer__icon" />
          GitHub
          <sup><Icon icon="lucide:external-link" class="footer__icon" /></sup>
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;

.footer {
  padding: 15px 0;
  margin-top: 40px;
  color: var.$color-accent;
  background-color: var.$color-primary;
  text-align: center;

  &__container {
    margin: auto;
    width: 90%;
  }

  &__main {
    font-size: var.$fs-sm;
    margin-bottom: 8px;
  }

  &__sub {
    font-size: var.$fs-xs;
    color: rgba($color: var.$color-accent, $alpha: 0.75);
  }

  &__link {
    text-decoration: underline;
    transition: 200ms;

    &:hover {
      color: rgba($color: var.$color-accent, $alpha: 0.7);
    }
  }
}

@media only screen and (min-width: 600px) {
  .footer {
    padding: 20px 0;
    &__container {
      width: 75%;
    }
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    &__container {
      width: 60%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .footer {
    &__container {
      width: 50%;
    }
  }
}
</style>