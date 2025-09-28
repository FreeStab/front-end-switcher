<script>
  import { onMount } from 'svelte'
  
  let data = null
  let loading = true
  let error = null

  async function fetchData() {
    loading = true
    error = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to load')
      data = await response.json()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }

  onMount(() => fetchData())
</script>

{#if loading}
  <div class="skeleton-container">
    {#each Array(3) as _, i}
      <div class="skeleton-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
    {/each}
  </div>
{:else if error}
  <div class="error-state">
    <p>{error}</p>
    <button on:click={fetchData}>Retry</button>
  </div>
{:else if data}
  <div class="content">
    {#each data as item (item.id)}
      <div class="item">
        <img src={item.avatar} class="avatar" alt="Avatar" />
        <div class="content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .skeleton-container {
    padding: 20px;
  }

  .skeleton-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;
    background: #f5f5f5;
  }

  .skeleton-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(90deg, #e2e2e2 25%, #f0f0f0 50%, #e2e2e2 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    margin-right: 16px;
  }

  .skeleton-content {
    flex: 1;
  }

  .skeleton-line {
    height: 16px;
    background: linear-gradient(90deg, #e2e2e2 25%, #f0f0f0 50%, #e2e2e2 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .skeleton-line-title {
    height: 20px;
    width: 60%;
  }

  .skeleton-line-text {
    width: 80%;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .content .item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .error-state {
    text-align: center;
    padding: 40px;
    color: #cc0000;
  }

  .error-state button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>