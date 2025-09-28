<template>
  <div>
    <p>Count: {{ count }}</p>
    <ChildComponent @increment="handleIncrement" @decrement="handleDecrement" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleIncrement() {
      this.count++;
    },
    handleDecrement() {
      this.count--;
    },
  },
};
</script>
