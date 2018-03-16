<template>
  <b-button variant="primary" block
    v-on:click="login">
    Cadastre-se com Facebook
  </b-button>
</template>

<script>
export default {
  name: 'FacebookLogin',
  props: {
    fields: { type: String, default: 'public_profile' },
    appId: { type: String, required: true },
    xfbml: { type: Boolean, default: true },
    cookie: { type: Boolean, default: true },
    version: { type: String, default: 'v2.12' },
  },
  methods: {
    login() {
      window.FB.login(
        response => this.$emit(response.authResponse ? 'success' : 'error', response),
        { fields: this.fields },
      );
    },
  },
  mounted() {
    (function (d, s, id) { /* eslint-disable-line func-names */
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: this.appId,
        xfbml: this.xfbml,
        cookie: this.cookie,
        version: this.version,
      });
    };
  },
};
</script>

<style></style>
