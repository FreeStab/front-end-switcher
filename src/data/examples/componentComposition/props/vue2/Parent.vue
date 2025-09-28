<template>
  <div>
    <ChildComponent :title="pageTitle" :count="counter" :is-active="isActive" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  data() {
    return {
      pageTitle: "Hello World",
      counter: 42,
      isActive: true,
    };
  },
};
</script>
