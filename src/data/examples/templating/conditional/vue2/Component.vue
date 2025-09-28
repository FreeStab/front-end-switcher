<template>
  <div>
    <button @click="toggle">Toggle</button>
    <p v-if="isVisible">This is visible!</p>
    <p v-else>This is hidden!</p>

    <div v-show="isVisible">
      <h3>Conditional Content</h3>
      <p v-if="count > 5">Count is greater than 5: {{ count }}</p>
      <p v-else-if="count > 0">Count is between 1 and 5: {{ count }}</p>
      <p v-else>Count is 0 or negative</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      count: 3,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
      this.count++;
    },
  },
};
</script>
