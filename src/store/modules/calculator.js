import * as Calculator from 'Services/calculator';
/**
 * Calculator storage
 */

// ---------- Default State
const state = {
  history: [],
  calc: [],
  number: undefined,
  operator: undefined
};
// const initialState = () => state;

// ---------- Actions
const actions = {
  addKey: ({ commit }, pressedKey) => {
    // add a number
    if ('0123456789'.includes(pressedKey)) {
      commit('addNumber', pressedKey);
    }
    // add an operator
    else if ('+-*/'.includes(pressedKey)) {
      commit('addOperator', pressedKey);
    }
    // add a separator
    else if ('.,'.includes(pressedKey)) {
      commit('addSeparator', pressedKey);
    }
    // calculate
    else if ('Enter' === pressedKey) {
      commit('calculate');
    }
    // clear calculation
    else if ('c' === pressedKey) {
      commit('clear');
    }
    // Ignored but debug
    else {
      console.log(`Ignored pressed key: ${pressedKey}`);
    }
  }
};

// ---------- Mutations
const mutations = {
  /**
   * Append a number to existing current number of define a new number
   *
   * If last operator is defined, it is saved to current calculation only if:
   * - number is not defined
   * - current calculation ends with a number
   */
  addNumber: (state, number) => {
    // number was already defined
    if (state.number) {
      state.number += number;
    }
    // new number
    else {
      // save last operator...
      if (state.operator) {
        // only if a number is previously defined
        if (state.calc.length) state.calc.push(state.operator);
        state.operator = undefined;
      }
      state.number = number.toString();
    }
  },
  /**
   * Define last operator
   */
  addOperator: (state, operator) => {
    // if number is already defined
    if (state.number) {
      state.calc.push(new Number(state.number));
      state.number = undefined;
    }
    // replace last operator regardless context
    state.operator = operator;
  },
  /**
   * Add a decimal separator
   */
  addSeparator: state => {
    // Append to an existing number only
    if (state.number) {
      state.number += '.';
    }
  },
  /**
   * Calculus!
   */
  calculate: state => {
    // empty calculation
    if (state.calc.length === 0) {
      return;
    }

    // add the last missing number
    if (state.number) {
      state.calc.push(new Number(state.number));
      state.number = undefined;
    }

    // calculate
    const thisCalc = state.calc.slice(0);
    let calcArr = Calculator.calculate(state.calc);

    // save history
    state.history.push({
      datetime: new Date(),
      calc: thisCalc,
      result: calcArr[0]
    });

    // reset values
    state.number = calcArr[0].toString();
    state.calc = [];
  },
  deleteLastNumber: state => {
    if (state.number) {
      state.number = state.number.substring(0, state.number.length - 1);
    }
  },
  clear: state => {
    state.calc = [];
    state.number = undefined;
    state.operator = undefined;
  }
};

const getters = {
  formattedHistory: state => {
    return state.history.map(pastCalc => ({
      ...pastCalc,
      calc: pastCalc.calc.join(' ')
    }));
  },
  /**
   * Never return a null/undefined string
   */
  formattedCalculation: state => {
    return state.calc.length ? state.calc.join(' ') : "> ";
  }
};

// ---------- Store definition
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
