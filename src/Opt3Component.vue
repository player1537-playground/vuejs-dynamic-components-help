<template>
  <div>
    <input
       type="text"
       @input="updateText($event)"
       :value="value.text"
       ></input>
    <input
       type="checkbox"
       @click="updateButton($event)"
       :value="value.button"
       ></input>
  </div>
</template>

<script>

  export default {
      props: {
          value: Object,
      },
      methods: {
          updateText(event) {
              event.targetName = 'text';
              this.updateData(event);
          },
          updateButton(event) {
              event.targetName = 'button';
              this.updateData(event);
          },
          updateData(event) {
              this.$dispatch('input', event);
          },
      },
  };
</script>
