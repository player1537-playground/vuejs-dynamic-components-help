<template>
  <div>
    <input type="text" v-model="textInternal" debounce="500"></input>
    <input type="checkbox" v-model="buttonInternal"></input>
  </div>
</template>

<script>

  export default {
      props: {
          text: String,
          button: Boolean,
      },
      data() {
          return {
          }
      },
      computed: {
          textInternal: {
              get() { return this.text; },
              set(val) { this.$dispatch('text', val); },
          },
          buttonInternal: {
              get() { return this.button; },
              set(val) { this.$dispatch('button', val); },
          },
      },
  };
</script>
