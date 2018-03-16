<template>
  <b-jumbotron tag="section" class="dashboard"
    :lead="lead" bg-variant="transparent">

    <div v-if="condos.length " class="condos">
      <b-button class="condo" variant="outline-secondary" block
        v-for="condo in condos" v-bind:key="condo._id"
        :to="{name: 'Condo', params: { id: condo._id } }">
        <h2>{{ condo.name }}</h2>
      </b-button>
      <b-button variant="primary" size="lg" block :to="{ name: 'CondoAdd' }">
        Cadastre Outro Condominio
      </b-button>
    </div>

    <div v-else class="no-condos">
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
    lead() {
      return this.condos.length ?
        `Bem vindo, ${this.user.name.first}.
        Escolha um condomínio para cadastrar novas medições.` :
        'Você ainda não cadastrou nenhum condomínio!';
    },
  },
  created() {
    this.$store.dispatch('getCondos');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
