<template>
  <div>
    <opt4-component
       :value="{ text: opt4.text, button: opt4.button }"
       @input="proxy.apply(this, $arguments) | debounce"
       ></opt4-component>
  </div>
</template>

<script>

  import Opt4Component from './Opt4Component.vue';

  import { getOpt4 } from './vuex/getters';
  import { setOpt4 } from './vuex/actions';

  export default {
      name: 'Opt4Wrapper',
      vuex: {
          getters: {
              opt4: getOpt4,
          },
          actions: {
              setOpt4,
          },
      },
      methods: {
          proxy(_) {
              console.log('in proxy', arguments, this);
              this.setOpt4(_);
          },
      },
      components: {
          Opt4Component,
      },
  };
</script>
