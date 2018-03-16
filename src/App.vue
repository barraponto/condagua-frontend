<template>
  <div class="app">
    <Header />
    <main id="app">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style></style>
