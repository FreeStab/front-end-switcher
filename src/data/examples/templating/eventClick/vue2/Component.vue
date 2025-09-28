<template>
  <div>
    <button @click="handleClick">Click me!</button>
    <p>Clicked {{ count }} times</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      console.log("Button clicked!");
    },
  },
};
</script>
