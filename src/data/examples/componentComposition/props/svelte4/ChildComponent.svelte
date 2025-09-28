<script>
  export let title
  export let count = 0
  export let isActive = false
</script>

<div>
  <h1>{title}</h1>
  <p>Count: {count}</p>
  <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
</div>