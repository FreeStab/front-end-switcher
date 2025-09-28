<template>
  <div :class="theme">
    <h1>Welcome {{ user.name }}</h1>
    <p>Role: {{ user.role }}</p>
  </div>
</template>

<script>
export default {
  inject: ["theme", "user"],
};
</script>
