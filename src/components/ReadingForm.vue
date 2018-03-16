<template>
    <b-form v-on:submit.prevent="onSubmit">
      <b-form-group label="Valor no Relógio:" label-for="value"
        description="A medida em metros cúbicos no relógio. Pode incluir os zeros!">
        <b-form-input id="value" type="number" v-model="form.value"
          placeholder="0000128" required>
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
