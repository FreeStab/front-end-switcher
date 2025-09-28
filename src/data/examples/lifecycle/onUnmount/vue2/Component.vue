<template>
  <div>Component will cleanup on unmount</div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log("Component will unmount");
    // Cleanup logic here
  },
};
</script>
