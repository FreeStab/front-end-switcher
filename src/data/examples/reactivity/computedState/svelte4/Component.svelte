<script>
  let count = 0
  $: doubleCount = count * 2
</script>

<div>
  <div>{count}</div>
  <div>{doubleCount}</div>
</div>