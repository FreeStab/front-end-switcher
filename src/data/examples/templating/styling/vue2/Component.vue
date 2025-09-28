<template>
  <div class="container">
    <p :class="{ active: isActive }" :style="styles">Styled content</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      styles: {
        color: "blue",
        fontSize: "16px",
      },
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.active {
  font-weight: bold;
}
</style>
