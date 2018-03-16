<template>
  <b-jumbotron tag="section" class="hydro"
    bg-variant="transparent" header-level="5"
    :header="hydro.name">
    <div class="readings" v-if="hydro.readings.length">
      <b-button variant="primary" size="lg" block
        :to="{ name: 'ReadingAdd', params: { id: hydro._id } }">
        Cadastre Outra Leitura
      </b-button>
    </div>
    <div v-else class="no-readings">
      <p>Você ainda não cadastrou nenhuma leitura!</p>
      <b-button variant="primary" size="lg" block
        :to="{ name: 'ReadingAdd', params: { id: hydro._id } }">
        Cadastre Agora
      </b-button>
    </div>
  </b-jumbotron>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HydroView',
  data() {
    return { };
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
<style scoped></style>
