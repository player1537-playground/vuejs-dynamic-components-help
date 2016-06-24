<template>
  <div>
    <opt1-component
       :text="text"
       @text="setText"
       :button="button"
       @button="setButton"
       ></opt1-component>
  </div>
</template>

<script>

  import Opt1Component from './Opt1Component.vue';

  import { getOpt1Text, getOpt1Button } from './vuex/getters';
  import { setOpt1Text, setOpt1Button } from './vuex/actions';

  export default {
      data() {
          return {
          }
      },
      vuex: {
          getters: {
              text: getOpt1Text,
              button: getOpt1Button,
          },
          actions: {
              setText: setOpt1Text,
              setButton: setOpt1Button,
          },
      },
      components: {
          Opt1Component,
      },
  };
</script>
