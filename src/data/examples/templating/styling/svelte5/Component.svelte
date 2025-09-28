<script>
  let isActive = $state(true)
  
  const styles = $derived({
    color: 'blue',
    fontSize: '16px'
  })
</script>

<div class="container">
  <p class:active={isActive} style:color={styles.color} style:font-size={styles.fontSize}>
    Styled content
  </p>
</div>

<style>
  .container {
    padding: 20px;
  }
  .active {
    font-weight: bold;
  }
</style>