<template>
  <b-jumbotron tag="section" class="dashboard" bg-variant="transparent">
    <template slot="lead">
      Bem vindo, {{ user.name.first }}.
      Escolha um condomínio para cadastrar novas medições.
    </template>
    <div v-if="condos.length " class="">
      <b-button class="condo" variant="outline-secondary" block
        v-for="condo in condos" v-bind:key="condo.id">
        <h2>{{ condo.name }}</h2>
      </b-button>
      <b-button variant="primary" size="lg" block :to="{ name: 'CondoAdd' }">
        Cadastre Outro Condominio
      </b-button>
    </div>
    <div v-else class="no-condos">
      <p>Você ainda não cadastrou nenhum condomínio!</p>
      <b-button variant="primary" size="lg" block :to="{ name: 'CondoAdd' }">
        Cadastre Agora
      </b-button>
    </div>
  </b-jumbotron>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return { };
  },
  computed: {
    ...mapState(['condos', 'user']),
  },
  created() {
    this.$store.dispatch('getCondos');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
