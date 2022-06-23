<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';

const searchQuery = ref('');

function test() {
  console.log('clicked')
}
</script>

<template>
  <Navbar>
    <a href="#">Browse</a>
    <a href="#">Top</a>
    <a href="#">Seasonal</a>
  </Navbar>

  <Search 
    :modelValue="searchQuery" 
    :action="test"
    />

</template>

<style lang="scss">
@use '@/assets/base.scss';
</style>