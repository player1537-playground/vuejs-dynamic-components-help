<template>
  <div>
    <opt3-component
       :value="{ text: text, button: button }"
       @input="updateData"
       ></opt3-component>
  </div>
</template>

<script>

  import Opt3Component from './Opt3Component.vue';

  import { getOpt3Text, getOpt3Button } from './vuex/getters';
  import { setOpt3Text, setOpt3Button } from './vuex/actions';

  export default {
      vuex: {
          getters: {
              text: getOpt3Text,
              button: getOpt3Button,
          },
          actions: {
              setText: setOpt3Text,
              setButton: setOpt3Button,
          },
      },
      methods: {
          updateData(event) {
              if (event.targetName === 'button') {
                  this.setButton(event.target.checked);
              } else if (event.targetName === 'text') {
                  this.setText(event.target.value);
              } else {
                  console.error("Unexpected targetName:", event.targetName);
              }
          },
      },
      components: {
          Opt3Component,
      },
  };
</script>
