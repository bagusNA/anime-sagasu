<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const props = defineProps<{
  title: string,
  hideByDefault?: boolean,
  noContentPadding?: boolean
}>();

const show = ref(!props.hideByDefault ?? true);
const noContentPadding = ref(props.noContentPadding)
</script>

<template>
  <div class="section">
    <div 
      class="section__header"
      @click="show = !show"
    >
      <span 
        class="icon"
        :class="{ 'icon--active': show }"
      >
        <Icon icon="ion:chevron-forward" />
      </span>
      <h4>{{ title }}</h4>
    </div>

    <Transition name="slide">
      <div v-show="show"
        class="section__content"
        :class="{ 'p-0': noContentPadding }"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

$transition-duration: 0.2s;

.p-0 {
  padding: 0 !important;
}

.section {
  border-radius: 5px;
  color: var.$color-primary;
  background-color: var.$color-accent;
  box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.5);

  &__header {
    display: flex;
    padding: 5px;
    cursor: pointer;
    user-select: none;
  }

  &__content {
    padding: 0 15px;
    padding-bottom: 10px;
    color: var.$color-text;
    font-size: var.$fs-xs;
    overflow: hidden;
  }
}

.icon {
  @include mixins.flex-center;
  font-size: var.$fs-xl;
  padding-right: 5px;
  transition: transform $transition-duration;

  &--active {
    transform: rotate(90deg) translateX(3px);
  }
}


// Transition
.slide-enter-active {
  animation: slide calc($transition-duration * 4);
}
.slide-leave-active {
  animation: slide $transition-duration reverse;
}

// Workaround for transitioning element with height: auto;
// Known issue: transition not firing immediately on collapse
@keyframes slide {
  0% { 
    max-height: 0;
    opacity: 0;
  }
  100% { 
    max-height: 2000px;
    opacity: 1;
  }
}
</style>