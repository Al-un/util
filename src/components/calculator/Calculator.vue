<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>Calculator</h2>
      </div>
    </div>
    <div class="row">
      <calc-display></calc-display>
    </div>
    <div class="row">
      <calc-button text="CE" @calc-click="clear()"/>
      <calc-button text="C" @calc-click="clear()"/>
      <calc-button text="<-" @calc-click="deleteLastNumber()"/>
      <calc-button text="/" @calc-click="addOperator('/')"/>
    </div>
    <div class="row">
      <calc-button text="7" @calc-click="addNumber(7)"/>
      <calc-button text="8" @calc-click="addNumber(8)"/>
      <calc-button text="9" @calc-click="addNumber(9)"/>
      <calc-button text="x" @calc-click="addOperator('*')"/>
    </div>
    <div class="row">
      <calc-button text="4" @calc-click="addNumber(4)"/>
      <calc-button text="5" @calc-click="addNumber(5)"/>
      <calc-button text="6" @calc-click="addNumber(6)"/>
      <calc-button text="-" @calc-click="addOperator('-')"/>
    </div>
    <div class="row">
      <calc-button text="1" @calc-click="addNumber(1)"/>
      <calc-button text="2" @calc-click="addNumber(2)"/>
      <calc-button text="3" @calc-click="addNumber(3)"/>
      <calc-button text="+" @calc-click="addOperator('+')"/>
    </div>
    <div class="row">
      <calc-button text/>
      <calc-button text="0" @calc-click="addNumber(0)"/>
      <calc-button text="." @calc-click="addSeparator()"/>
      <calc-button text="=" @calc-click="calculate()"/>
    </div>
    <div class="row">
      <div class="col">
        <calc-history></calc-history>
      </div>
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalcButton";
import CalcHistory from "./CalcHistory";
import CalcDisplay from "./CalcDisplay";

export default {
  name: "calculator",
  components: {
    CalcButton,
    CalcHistory,
    CalcDisplay
  },

  created() {
    // https://stackoverflow.com/questions/38422076/how-to-set-keyup-on-whole-page-in-vue-js
    // https://keycode.info/
    this.keyHandler = e => this.$store.dispatch("calculator/addKey", e.key);
    window.addEventListener("keyup", this.keyHandler);
  },

  beforeDestroy() {
    window.removeEventListener("keyup", this.keyHandler);
  },

  methods: {
    /**
     * Add a number regardless current input state
     */
    addNumber(number) {
      this.$store.commit("calculator/addNumber", number);
    },
    addOperator(operator) {
      this.$store.commit("calculator/addOperator", operator);
    },
    addSeparator() {
      this.$store.commit("calculator/addSeparator");
    },
    deleteLastNumber() {
      this.$store.commit("calculator/deleteLastNumber");
    },
    calculate() {
      this.$store.commit("calculator/calculate");
    },
    clear() {
      this.$store.commit("calculator/clear");
    }
  }
};
</script>

<style lang="scss" scoped>
.calculator {
  width: 90%;
  max-width: 400px;
  margin: auto;
}
</style>

