<template>
  <div>
    <input ref="inputRef" type="text" placeholder="Focus me!" />
    <button @click="focusInput">Focus Input</button>
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    focusInput() {
      this.$refs.inputRef.focus();
      this.inputValue = this.$refs.inputRef.value;
    },
  },
};
</script>
