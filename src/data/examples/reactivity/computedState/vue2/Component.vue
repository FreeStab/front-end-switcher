<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>
