<script>
  let selectedLanguage = $state('javascript')
  let selectedLevel = $state('intermediate')

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
</script>

<div>
  <h3>Programming Language</h3>
  {#each languages as language (language.id)}
    <label>
      <input 
        bind:group={selectedLanguage}
        value={language.id}
        type="radio"
        name="language"
      />
      {language.label}
    </label>
  {/each}
  <p>Selected: {selectedLanguage}</p>

  <h3>Experience Level</h3>
  {#each experienceLevels as level (level.id)}
    <label>
      <input 
        bind:group={selectedLevel}
        value={level.id}
        type="radio"
        name="experience"
      />
      {level.label}
    </label>
  {/each}
  <p>Experience: {selectedLevel}</p>
</div>