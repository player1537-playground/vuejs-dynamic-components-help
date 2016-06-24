<template>
  <div>
    <h1>Option 1</h1>
    <opt1-wrapper></opt1-wrapper>

    <h1>Option 2</h1>
    <opt2-wrapper></opt2-wrapper>
  </div>
</template>

<script>

  import Opt1Wrapper from './Opt1Wrapper.vue';
  import Opt2Wrapper from './Opt2Wrapper.vue';

  import store from './vuex/store';

  export default {
      data() {
          return {
          }
      },
      components: {
          Opt1Wrapper,
          Opt2Wrapper,
      },
      store,
  }
</script>
