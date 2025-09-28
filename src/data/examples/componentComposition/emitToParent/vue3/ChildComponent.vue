<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['increment', 'decrement'])

const increment = () => {
  emit('increment')
}

const decrement = () => {
  emit('decrement')
}
</script>