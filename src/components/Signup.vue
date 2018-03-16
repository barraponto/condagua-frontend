<template>
  <b-container>
    <b-jumbotron tag="section" class="signup" bg-variant='transparent'>
      <template slot="lead">
        Crie seu perfil e monitore o consumo de água do seu condomínio.
      </template>
      <fb-login appId="584208131930506" v-on:success="facebookLogin" />
      <b-button variant="info" block>Cadastre-se com Google</b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
import FacebookLogin from '@/components/FacebookLogin';

export default {
  name: 'Signup',
  components: {
    'fb-login': FacebookLogin,
  },
  data() {
    return {
    };
  },
  methods: {
    facebookLogin({ status, authResponse }) {
      if (status === 'connected') {
        const { userId, accessToken } = authResponse;
        this.$store.dispatch('facebookLogin', { userId, accessToken });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
