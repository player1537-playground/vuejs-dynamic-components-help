export function setOpt1Button({ dispatch }, val) {
  dispatch('OPT1_BUTTON_SET', val);
}

export function setOpt1Text({ dispatch }, val) {
  dispatch('OPT1_TEXT_SET', val);
}



export function setOpt2Button({ dispatch }, val) {
  dispatch('OPT2_BUTTON_SET', val);
}

export function setOpt2Text({ dispatch }, val) {
  dispatch('OPT2_TEXT_SET', val);
}


export function setOpt3Button({ dispatch }, val) {
  dispatch('OPT3_BUTTON_SET', val);
}

export function setOpt3Text({ dispatch }, val) {
  dispatch('OPT3_TEXT_SET', val);
}


export function setOpt4({ dispatch }, e) {
  var text = e.target.value.text,
      button = e.target.value.button;

  if (text.length % 2 == 0) {
    button = true;
  }

  dispatch('SET_OPT4', { text, button });
}
