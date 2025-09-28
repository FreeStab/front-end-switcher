<script>
  let { title, count = 0, isActive = false } = $props()
</script>

<div>
  <h1>{title}</h1>
  <p>Count: {count}</p>
  <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
</div>