<script>
  let { onincrement, ondecrement } = $props()
</script>

<div>
  <button onclick={onincrement}>+</button>
  <button onclick={ondecrement}>-</button>
</div>