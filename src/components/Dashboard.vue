<template>
  <b-jumbotron tag="section" class="dashboard" bg-variant="transparent">
    <template slot="lead">
      Bem vindo, {{ $store.state.user.name.first }}
    </template>
    <div v-if="condos.length " class="">
      <div class="condo" v-for="condo in condos">
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
export default {
  name: 'Home',
  data() {
    return {
      condos: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
