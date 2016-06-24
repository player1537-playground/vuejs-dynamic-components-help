<template>
  <div>
    <opt2-component
       :text.sync="textInternal"
       :button.sync="buttonInternal"
       ></opt2-component>
  </div>
</template>

<script>

  import Opt2Component from './Opt2Component.vue';

  import { getOpt2Text, getOpt2Button } from './vuex/getters';
  import { setOpt2Text, setOpt2Button } from './vuex/actions';

  export default {
      data() {
          return {
          }
      },
      vuex: {
          getters: {
              text: getOpt2Text,
              button: getOpt2Button,
          },
          actions: {
              setText: setOpt2Text,
              setButton: setOpt2Button,
          },
      },
      computed: {
          textInternal: {
              get() { return this.text; },
              set(val) { this.setText(val); },
          },
          buttonInternal: {
              get() { return this.button; },
              set(val) { this.setButton(val); },
          },
      },
      components: {
          Opt2Component,
      },
  };
</script>
