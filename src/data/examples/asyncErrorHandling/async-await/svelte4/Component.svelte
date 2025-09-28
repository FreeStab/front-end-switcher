<script>
  let data = null
  let loading = false
  let error = null

  async function fetchData() {
    loading = true
    error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      data = await response.json()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }
</script>

<button on:click={fetchData} disabled={loading}>
  {loading ? 'Loading...' : 'Fetch Data'}
</button>

{#if error}
  <div class="error">{error}</div>
{/if}

{#if data}
  <div>{data.message}</div>
{/if}