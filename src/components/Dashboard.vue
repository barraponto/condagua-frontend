<template>
  <b-jumbotron tag="section" class="dashboard" bg-variant="transparent">
    <template slot="lead">
      Bem vindo, {{ user.name.first }}
    </template>
    <div v-if="condos.length " class="">
      <div class="condo" v-for="condo in condos" v-bind:key="condo.id">
        Relogio
      </div>
    </div>
    <div v-else class="no-condos">
      <p>Você ainda não cadastrou nenhum condomínio!</p>
      <b-button variant="primary" size="lg" block>Cadastre Agora</b-button>
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
