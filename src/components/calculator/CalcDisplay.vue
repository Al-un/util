<template>
  <div class="w-100">
    <div class>{{ currCalc }} {{ currOperator }}</div>
    <div class="display-4 text-right">{{ currNumber }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "calc-display",
  computed: {
    ...mapState({
      currNumber: state => state.calculator.number || 0,
      currOperator: state => state.calculator.operator
    }),
    ...mapGetters({
      currCalc: "calculator/formattedCalculation"
    })
  }
};
</script>

<style>
</style>
