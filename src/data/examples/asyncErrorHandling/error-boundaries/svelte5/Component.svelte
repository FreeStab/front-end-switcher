<script>
  let hasError = $state(false)
  let errorMessage = $state('')
  
  function handleError(error) {
    console.error('Error occurred:', error)
    hasError = true
    errorMessage = error.message
    // Send to error reporting service
  }

  function retry() {
    hasError = false
    errorMessage = ''
  }

  // Catch unhandled errors
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
    <button onclick={retry}>Try Again</button>
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