<template>
  <b-container>
    <section class="reading-add">
      <reading-form v-on:submit="addReading"></reading-form>
    </section>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import ReadingForm from '@/components/ReadingForm';

export default {
  name: 'ReadingAdd',
  data() {
    return { };
  },
  components: {
    'reading-form': ReadingForm,
  },
  methods: {
    addReading({ value }) {
      /* eslint-disable-next-line no-underscore-dangle */
      return this.$store.dispatch('addReading', { value, hydro: this.hydro._id })
        .then(() => this.$router.push({ name: 'Dashboard' }));
    },
  },
  computed: {
    ...mapState(['condos', 'user']),
    hydrometers() {
      return this.condos
        .map(condo => condo.hydrometers)
        .reduce((aggregate, hydrometers) => [...aggregate, ...hydrometers], []);
    },
    hydro() {
      return this.hydrometers.find(
        hydro => hydro._id === this.$route.params.id); /* eslint-disable-line */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section { margin-top: 1em; }
</style>
