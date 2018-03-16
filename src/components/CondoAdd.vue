<template>
  <b-container>
    <section class="condo-add" header="Conta Alta?">
      <condo-form v-on:submit="addCondo"></condo-form>
    </section>
  </b-container>
</template>

<script>
import CondoForm from '@/components/CondoForm';

export default {
  name: 'CondoAdd',
  data() {
    return { };
  },
  components: {
    'condo-form': CondoForm,
  },
  methods: {
    addCondo({ name }) {
      return this.$store.dispatch('addCondo', { name })
        .then(() => this.$router.push({ name: 'Dashboard' }));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section { margin-top: 1em; }
</style>
