<template>
  <div>
    <CardComponent>
      <h2>Card Title</h2>
      <p>This is the card content</p>
      <button>Action Button</button>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";

export default {
  components: { CardComponent },
};
</script>
