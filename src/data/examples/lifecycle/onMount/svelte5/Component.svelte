<script>
  import { onMount } from 'svelte'
  
  let message = $state('')
  
  onMount(() => {
    message = 'Component mounted!'
    console.log('Component mounted')
  })
</script>

<div>{message}</div>