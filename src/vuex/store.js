import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  opt1: {
    button: false,
    text: 'Initial Text',
  },
  opt2: {
    button: false,
    text: 'Initial Text',
  },
  opt3: {
    button: false,
    text: 'Initial Text',
  },
  opt4: {
    button: false,
    text: 'Initial Text',
  },
};

const mutations = {
  OPT1_BUTTON_SET({ opt1 }, val) {
    opt1.button = val;
  },
  OPT1_TEXT_SET({ opt1 }, val) {
    opt1.text = val;
  },

  OPT2_BUTTON_SET({ opt2 }, val) {
    opt2.button = val;
  },
  OPT2_TEXT_SET({ opt2 }, val) {
    opt2.text = val;
  },

  OPT3_BUTTON_SET({ opt3 }, val) {
    opt3.button = val;
  },
  OPT3_TEXT_SET({ opt3 }, val) {
    opt3.text = val;
  },

  SET_OPT4({ opt4 }, { button, text }) {
    opt4.button = button;
    opt4.text = text;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
