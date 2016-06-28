<template>
  <div>
    <input
       type="text"
       @input.stop.prevent="updateText"
       v-model="value.text"
       ></input>
    <input
       type="checkbox"
       @change.stop.prevent="updateButton"
       v-model="value.button"
       ></input>
  </div>
</template>

<script>

  export default {
      name: 'Opt4Component',
      props: {
          value: Object,
      },
      methods: {
          updateText(e) {
              this.emitEvent('input', {
                  text: e.target.value,
                  button: this.value.button,
              });
          },
          updateButton(e) {
              this.emitEvent('input', {
                  text: this.value.text,
                  button: e.target.checked,
              });
          },
          emitEvent(eventName, value) {
              this.$emit(eventName, { target: { value } });
          },
      },
  };
</script>
