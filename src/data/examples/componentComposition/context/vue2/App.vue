<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from "./ParentComponent.vue";

export default {
  components: { ParentComponent },
  provide() {
    return {
      theme: "dark",
      user: {
        name: "John Doe",
        role: "admin",
      },
    };
  },
};
</script>
