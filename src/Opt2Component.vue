<template>
  <div>
    <input type="text" v-model="text" debounce="500"></input>
    <input type="checkbox" v-model="button"></input>
  </div>
</template>

<script>

  export default {
      props: {
          text: {
              type: String,
              twoWay: true,
          },
          button: {
              type: Boolean,
              twoWay: true,
          },
      },
      data() {
          return {
          }
      },
  };
</script>
