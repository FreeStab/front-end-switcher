<template>
  <div>
    <CardComponent>
      <h2>Custom Title</h2>
      <p>Custom content provided</p>
    </CardComponent>

    <!-- Card without content (will show fallback) -->
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";

export default {
  components: { CardComponent },
};
</script>
