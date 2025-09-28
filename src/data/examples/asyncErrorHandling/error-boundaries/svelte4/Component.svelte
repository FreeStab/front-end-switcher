<script>
  // This would typically be in a separate errorStore.js file
  import { writable } from 'svelte/store'
  
  const errorStore = writable(null)
  
  function handleError(error) {
    console.error('Error occurred:', error)
    errorStore.set(error.message)
    // Send to error reporting service
  }
  
  let hasError = false
  let errorMessage = ''

  $: if ($errorStore) {
    hasError = true
    errorMessage = $errorStore
  }

  function retry() {
    hasError = false
    errorMessage = ''
    errorStore.set(null)
  }

  // Catch unhandled promise rejections
  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
      handleError(event.reason)
    })
    
    window.addEventListener('error', (event) => {
      handleError(event.error)
    })
  }
</script>

{#if hasError}
  <div class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{errorMessage}</p>
    <button on:click={retry}>Try Again</button>
  </div>
{:else}
  <slot />
{/if}

<style>
  .error-boundary {
    padding: 20px;
    border: 2px solid #ff4444;
    border-radius: 8px;
    background-color: #ffe6e6;
    color: #cc0000;
    text-align: center;
  }
</style>