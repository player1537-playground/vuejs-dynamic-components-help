<template>
  <div>
    <h1>Option 1</h1>
    <opt1-wrapper></opt1-wrapper>

    <h1>Option 2</h1>
  </div>
</template>

<script>

  import Opt1Wrapper from './Opt1Wrapper.vue';

  import store from './vuex/store';

  export default {
      data() {
          return {
          }
      },
      components: {
          Opt1Wrapper,
      },
      store,
  }
</script>
