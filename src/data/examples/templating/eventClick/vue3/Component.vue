<template>
  <div>
    <button @click="handleClick">Click me!</button>
    <p>Clicked {{ count }} times</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const handleClick = () => {
  count.value++;
  console.log("Button clicked!");
};
</script>
