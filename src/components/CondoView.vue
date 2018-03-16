<template>
  <b-jumbotron tag="section" class="condo"
    bg-variant="transparent" header-level="5"
    :header="condo.name">
    <div class="hydrometers" v-if="condo.hydrometers.length">
      <b-button class="hydrometer" variant="outline-secondary" block
        v-for="hydro in condo.hydrometers" v-bind:key="hydro._id"
        :to="{ name: 'Hydro', params: { id: hydro._id } }">
        <h2>{{ hydro.name }}</h2>
      </b-button>
      <b-button variant="primary" size="lg" block
        :to="{ name: 'HydroAdd', params: { id: this.condo._id } }">
        Cadastre Outro Relógio
      </b-button>
    </div>
    <div v-else class="no-hydrometers">
      <p>Você ainda não cadastrou nenhum relógio!</p>
      <b-button variant="primary" size="lg" block
        :to="{ name: 'HydroAdd', params: { id: this.condo._id } }">
        Cadastre Agora
      </b-button>
    </div>
  </b-jumbotron>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CondoView',
  data() {
    return { };
  },
  computed: {
    ...mapState(['condos', 'user']),
    condo() {
      return this.condos.find(
        condo => condo._id === this.$route.params.id); /* eslint-disable-line */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
