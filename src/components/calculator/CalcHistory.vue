<template>
  <div>
    <h2>History</h2>
    <div v-for="calc in history" :key="calc.datetime.getTime()">
        <strong>{{ calc.datetime.toLocaleString('en-GB') }}</strong>
        &nbsp; 
        <span>{{ calc.calc }} = {{ calc.result }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "calc-history",
  computed: {
    ...mapGetters({
      history: "calculator/formattedHistory"
    })
  }
};
</script>

<style>
</style>
