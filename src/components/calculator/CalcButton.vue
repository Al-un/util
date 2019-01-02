<template>
  <div class="calc-button col text-center border border-primary p-3" @click="onClick()">{{ text }}</div>
</template>

<script>
export default {
  name: "CalcButton",
  props: {
    text: { type: String, required: true },
    width: { type: Number, default: 1 },
    height: { type: Number, default: 1 }
  },

  methods: {
    onClick() {
      this.$emit("calc-click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

.calc-button {
  @extend .bg-dark;
  @extend .text-white;
  &:hover {
    @extend .bg-primary;
    cursor: pointer;
  }
}
</style>


