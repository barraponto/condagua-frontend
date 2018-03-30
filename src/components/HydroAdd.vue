<template>
  <b-container>
    <section class="hydro-add" header="Conta Alta?">
      <hydro-form v-on:submit="addHydro"></hydro-form>
    </section>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import HydroForm from '@/components/HydroForm';

export default {
  name: 'HydroAdd',
  data() {
    return { };
  },
  components: {
    'hydro-form': HydroForm,
  },
  methods: {
    addHydro({ name }) {
      /* eslint-disable-next-line no-underscore-dangle */
      return this.$store.dispatch('addHydro', { name, condo: this.condo._id })
        .then(() => this.$router.push({ name: 'Dashboard' }));
    },
  },
  computed: {
    ...mapState(['condos']),
    condo() {
      return this.condos.find(
        condo => condo._id === this.$route.params.id); /* eslint-disable-line */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section { margin-top: 1em; }
</style>
