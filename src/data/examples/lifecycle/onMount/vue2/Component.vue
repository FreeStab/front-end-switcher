<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.message = "Component mounted!";
    console.log("Component mounted");
  },
};
</script>
