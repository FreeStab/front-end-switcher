<script>
  import { onDestroy } from 'svelte'
  
  onDestroy(() => {
    console.log('Component will unmount')
    // Cleanup logic here
  })
</script>

<div>Component will cleanup on unmount</div>