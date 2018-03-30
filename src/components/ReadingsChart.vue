<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  name: 'ReadingsChart',
  props: {
    data: { type: Object, required: true },
    options: {
      type: Object,
      default: () => ({
        lineTension: 0.1,
      }),
    },
  },
  data() {
    return { };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
