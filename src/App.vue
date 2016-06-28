<template>
  <div>
    <h1>Option 1</h1>
    <opt1-wrapper></opt1-wrapper>

    <h1>Option 2</h1>
    <opt2-wrapper></opt2-wrapper>

    <h1>Option 3</h1>
    <opt3-wrapper></opt3-wrapper>

    <h1>Option 4</h1>
    <opt4-wrapper></opt4-wrapper>
  </div>
</template>

<script>

  import Opt1Wrapper from './Opt1Wrapper.vue';
  import Opt2Wrapper from './Opt2Wrapper.vue';
  import Opt3Wrapper from './Opt3Wrapper.vue';
  import Opt4Wrapper from './Opt4Wrapper.vue';

  import store from './vuex/store';

  export default {
      data() {
          return {
          }
      },
      components: {
          Opt1Wrapper,
          Opt2Wrapper,
          Opt3Wrapper,
          Opt4Wrapper,
      },
      store,
  }
</script>
