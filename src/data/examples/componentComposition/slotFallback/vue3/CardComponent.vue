<template>
  <div class="card">
    <div class="card-body">
      <slot>
        <!-- Fallback content -->
        <h2>Default Title</h2>
        <p>No content provided</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}
</style>
