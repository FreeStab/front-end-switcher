/**
 * Lifecycle Examples
 * Examples demonstrating component lifecycle hooks
 */

export const onMount = {
  vue2: `<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.message = 'Component mounted!'
    console.log('Component mounted')
  }
}
</script>`,

  vue3: `<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('')

onMounted(() => {
  message.value = 'Component mounted!'
  console.log('Component mounted')
})
</script>`,

  react: `import { useState, useEffect } from 'react'

function Component() {
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    setMessage('Component mounted!')
    console.log('Component mounted')
  }, [])
  
  return <div>{message}</div>
}`,

  svelte4: `<script>
  import { onMount } from 'svelte'
  
  let message = ''
  
  onMount(() => {
    message = 'Component mounted!'
    console.log('Component mounted')
  })
</script>

<div>{message}</div>`,

  svelte5: `<script>
  import { onMount } from 'svelte'
  
  let message = $state('')
  
  onMount(() => {
    message = 'Component mounted!'
    console.log('Component mounted')
  })
</script>

<div>{message}</div>`,

  angular: `import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>{{ message }}</div>'
})
export class AppComponent implements OnInit {
  message = ''
  
  ngOnInit() {
    this.message = 'Component mounted!'
    console.log('Component mounted')
  }
}`,

  "angular-renaissance": `import { Component, OnInit, signal } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>{{ message() }}</div>'
})
export class AppComponent implements OnInit {
  message = signal('')
  
  ngOnInit() {
    this.message.set('Component mounted!')
    console.log('Component mounted')
  }
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class extends Component {
  @tracked message = ''
  
  constructor() {
    super(...arguments)
    this.message = 'Component mounted!'
    console.log('Component mounted')
  }
}

{{!-- template --}}
<div>{{this.message}}</div>`,

  solid: `import { createSignal, onMount } from 'solid-js'

function Component() {
  const [message, setMessage] = createSignal('')
  
  onMount(() => {
    setMessage('Component mounted!')
    console.log('Component mounted')
  })
  
  return <div>{message()}</div>
}`,

  alpine: `<div x-data="{ message: '' }" x-init="message = 'Component mounted!'; console.log('Component mounted')">
  <div x-text="message"></div>
</div>`,
};

export const onUnmount = {
  vue2: `<template>
  <div>Component will cleanup on unmount</div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('Component will unmount')
    // Cleanup logic here
  }
}
</script>`,

  vue3: `<template>
  <div>Component will cleanup on unmount</div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'

onBeforeUnmount(() => {
  console.log('Component will unmount')
  // Cleanup logic here
})
</script>`,

  react: `import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    return () => {
      console.log('Component will unmount')
      // Cleanup logic here
    }
  }, [])
  
  return <div>Component will cleanup on unmount</div>
}`,

  svelte4: `<script>
  import { onDestroy } from 'svelte'
  
  onDestroy(() => {
    console.log('Component will unmount')
    // Cleanup logic here
  })
</script>

<div>Component will cleanup on unmount</div>`,

  svelte5: `<script>
  import { onDestroy } from 'svelte'
  
  onDestroy(() => {
    console.log('Component will unmount')
    // Cleanup logic here
  })
</script>

<div>Component will cleanup on unmount</div>`,

  angular: `import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>Component will cleanup on unmount</div>'
})
export class AppComponent implements OnDestroy {
  ngOnDestroy() {
    console.log('Component will unmount')
    // Cleanup logic here
  }
}`,

  "angular-renaissance": `import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>Component will cleanup on unmount</div>'
})
export class AppComponent implements OnDestroy {
  ngOnDestroy() {
    console.log('Component will unmount')
    // Cleanup logic here
  }
}`,

  ember: `import Component from '@glimmer/component'

export default class extends Component {
  willDestroy() {
    super.willDestroy(...arguments)
    console.log('Component will unmount')
    // Cleanup logic here
  }
}

{{!-- template --}}
<div>Component will cleanup on unmount</div>`,

  solid: `import { onCleanup } from 'solid-js'

function Component() {
  onCleanup(() => {
    console.log('Component will unmount')
    // Cleanup logic here
  })
  
  return <div>Component will cleanup on unmount</div>
}`,

  alpine: `<div x-data="{}" x-init="$nextTick(() => { $el._x_cleanups = $el._x_cleanups || []; $el._x_cleanups.push(() => { console.log('Component will unmount') }) })">
  <div>Component will cleanup on unmount</div>
</div>`,
};
