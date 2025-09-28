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

<script setup>
import CardComponent from "./CardComponent.vue";
</script>
