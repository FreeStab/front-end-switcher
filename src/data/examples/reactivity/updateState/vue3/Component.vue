<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
