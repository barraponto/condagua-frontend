<template>
    <b-form v-on:submit.prevent="onSubmit">
      <b-form-group label="Nome:" label-for="name"
        description="O nome do seu condomínio">
        <b-form-input id="name" v-model="form.name"
          placeholder="Ex: Jardim do Lago" required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'CondoForm',
  props: {
    condo: { type: Object },
  },
  data() {
    return {
      form: { ...this.condo },
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
