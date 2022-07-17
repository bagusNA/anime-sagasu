<script setup lang="ts">
import { computed } from 'vue';
import BaseSection from './BaseSection.vue';

// TODO LIST:
// - Type the props
// - Handle links
// - Implement skeleton loading
// - Cleanup(?)

const { charList } = defineProps<{
  charList: any[]
}>();

const maxCharacters = 8;
const filteredList = computed(() => 
  charList.length > maxCharacters ? charList.slice(0, maxCharacters) : charList
);
</script>

<template>
  <BaseSection title="Characters" :noContentPadding="true">
    <div class="char-list">
      <div v-for="char in filteredList"
        class="char-list__item"
      >
        <div class="char-list__item__section char">
          <a 
            href="#" 
            class="cover"
            :style="{ backgroundImage: `url(${char.node.image.medium})` }"
          ></a>
          <a href="#" class="content">
            <p class="content__name">{{ char.node.name.full }}</p>
            <small class="content__role">{{ char.role }}</small>
          </a>
        </div>
        <div class="char-list__item__section staff">
          <a 
            href="#" 
            class="cover"
            :style="{ backgroundImage: `url(${char.voiceActors[0].image.medium})` }"
          ></a>
          <a href="#" class="content">
            <p class="content__name">{{ char.voiceActors[0].name.full }}</p>
            <small class="content__role">{{ char.voiceActors[0].languageV2 }}</small>
          </a>
        </div>
      </div>
    </div>
    <a href="#" class="view-more">
      View more
    </a>
  </BaseSection>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as var;
@use '@/assets/mixins.scss' as mixins;

$height: 90px;
$width: 70px;

.char-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  padding: 0 10px;
  padding-bottom: 10px;

  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: $height;

    &__section {
      display: grid;

      .cover {
        grid-area: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 4px;
        box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.3);
        transition: 100ms;

        &:hover {
          filter: brightness(0.85);
        }
      }
    }

    .content {
      @include mixins.flex-column;
      justify-content: space-between;
      grid-area: content;
      padding: 5px 10px;
      transition: 100ms;

      &__name {
        @include mixins.line-clamp;
      }

      &__role {
        color: rgba($color: #000000, $alpha: 0.75);
      }

      &:hover {
        text-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
}

.char {
  grid-template-areas: "cover content";
  grid-template-columns: $width auto;
}

.staff {
  grid-template-areas: "content cover";
  grid-template-columns: auto $width;
  text-align: end;
}

.view-more {
  @include mixins.flex-center;
  width: 100%;
  height: 2rem;
  color: rgba($color: var.$color-primary, $alpha: 0.8);
  transition: 100ms;

  &:hover {
    color: var.$color-primary;
  }
}

@media only screen and (min-width: 768px) {
  .char-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 15px;
  }
}
</style>