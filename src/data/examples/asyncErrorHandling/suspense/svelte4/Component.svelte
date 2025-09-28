<script>
  async function fetchData() {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  }

  let dataPromise = fetchData()
</script>

{#await dataPromise}
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading data...</p>
  </div>
{:then data}
  <div class="data-list">
    {#each data as item (item.id)}
      <div class="item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
{:catch error}
  <div class="error-message">
    <p>Error: {error.message}</p>
    <button on:click={() => dataPromise = fetchData()}>
      Retry
    </button>
  </div>
{/await}

<style>
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .data-list {
    padding: 20px;
  }

  .item {
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .item h3 {
    margin: 0 0 8px 0;
    color: #333;
  }

  .item p {
    margin: 0;
    color: #666;
  }

  .error-message {
    text-align: center;
    padding: 40px;
    color: #cc0000;
  }

  .error-message button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>