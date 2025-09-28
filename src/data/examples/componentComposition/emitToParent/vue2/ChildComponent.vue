<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
  },
};
</script>
