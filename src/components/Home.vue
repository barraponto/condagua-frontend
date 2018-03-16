<template>
  <b-jumbotron tag="section" class="home"
    header-level="4" fluid
    header="Conta Alta?">
    <template slot="lead">
      Monitore o consumo de água do seu condomínio e evite surpresas no fim do mês!
    </template>
    <b-button :to="{name: 'Signup'}" variant="primary" size="lg">Cadastre-se</b-button>
    <b-button variant="secondary" size="lg">Saiba Mais</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
