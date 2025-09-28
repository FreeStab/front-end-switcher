<script>
  let { children } = $props()
</script>

<div class="card">
  <div class="card-body">
    {@render children()}
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
  }
</style>