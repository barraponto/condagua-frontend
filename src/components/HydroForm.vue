<template>
    <b-form v-on:submit.prevent="onSubmit">
      <b-form-group label="Identificador:" label-for="name"
        description="Um identificador para o seu relógio.">
        <b-form-input id="name" v-model="form.name"
          placeholder="Ex: Bloco A, Relógio da Esquerda" required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'HydroForm',
  props: {
    hydro: { type: Object },
  },
  data() {
    return {
      form: { ...this.hydro },
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
