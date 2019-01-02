<template>
  <layout/>
</template>

<script>
import store from "./store";
import Layout from "Components/layout/Layout";

export default {
  name: "app",
  store,
  components: {
    Layout
  }
};
</script>

<style>

</style>
