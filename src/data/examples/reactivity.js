/**
 * Reactivity Examples
 * Examples demonstrating state management and reactive patterns
 */

export const declareState = {
  vue2: `<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>`,

  vue3: `<template>
  <div>{{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [count, setCount] = useState(0)
  
  return <div>{count}</div>
}`,

  svelte4: `<script>
  let count = 0
</script>

<div>{count}</div>`,

  svelte5: `<script>
  let count = $state(0)
</script>

<div>{count}</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>{{ count }}</div>'
})
export class AppComponent {
  count = 0
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-component',
  template: '<div>{{ count() }}</div>'
})
export class AppComponent {
  count = signal(0)
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class extends Component {
  @tracked count = 0
}

{{!-- template --}}
<div>{{this.count}}</div>`,

  solid: `import { createSignal } from 'solid-js'

function Component() {
  const [count, setCount] = createSignal(0)
  
  return <div>{count()}</div>
}`,

  alpine: `<div x-data="{ count: 0 }">
  <span x-text="count"></span>
</div>`,
};

export const updateState = {
  vue2: `<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  )
}`,

  svelte4: `<script>
  let count = 0
  
  const increment = () => {
    count++
  }
</script>

<div>
  <div>{count}</div>
  <button on:click={increment}>+</button>
</div>`,

  svelte5: `<script>
  let count = $state(0)
  
  const increment = () => {
    count++
  }
</script>

<div>
  <div>{count}</div>
  <button onclick={increment}>+</button>
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div>{{ count }}</div>
    <button (click)="increment()">+</button>
  \`
})
export class AppComponent {
  count = 0
  
  increment() {
    this.count++
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div>{{ count() }}</div>
    <button (click)="increment()">+</button>
  \`
})
export class AppComponent {
  count = signal(0)
  
  increment() {
    this.count.update(value => value + 1)
  }
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class extends Component {
  @tracked count = 0
  
  @action
  increment() {
    this.count++
  }
}

{{!-- template --}}
<div>
  <div>{{this.count}}</div>
  <button {{on "click" this.increment}}>+</button>
</div>`,

  solid: `import { createSignal } from 'solid-js'

function Component() {
  const [count, setCount] = createSignal(0)
  
  const increment = () => {
    setCount(count() + 1)
  }
  
  return (
    <div>
      <div>{count()}</div>
      <button onClick={increment}>+</button>
    </div>
  )
}`,

  alpine: `<div x-data="{ count: 0 }">
  <div x-text="count"></div>
  <button @click="count++">+</button>
</div>`,
};

export const computedState = {
  vue2: `<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
</script>`,

  react: `import { useState, useMemo } from 'react'

function Component() {
  const [count, setCount] = useState(0)
  const doubleCount = useMemo(() => count * 2, [count])
  
  return (
    <div>
      <div>{count}</div>
      <div>{doubleCount}</div>
    </div>
  )
}`,

  svelte4: `<script>
  let count = 0
  $: doubleCount = count * 2
</script>

<div>
  <div>{count}</div>
  <div>{doubleCount}</div>
</div>`,

  svelte5: `<script>
  let count = $state(0)
  const doubleCount = $derived(count * 2)
</script>

<div>
  <div>{count}</div>
  <div>{doubleCount}</div>
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  \`
})
export class AppComponent {
  count = 0
  
  get doubleCount() {
    return this.count * 2
  }
}`,

  "angular-renaissance": `import { Component, signal, computed } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div>{{ count() }}</div>
    <div>{{ doubleCount() }}</div>
  \`
})
export class AppComponent {
  count = signal(0)
  doubleCount = computed(() => this.count() * 2)
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class extends Component {
  @tracked count = 0
  
  get doubleCount() {
    return this.count * 2
  }
}

{{!-- template --}}
<div>
  <div>{{this.count}}</div>
  <div>{{this.doubleCount}}</div>
</div>`,

  solid: `import { createSignal, createMemo } from 'solid-js'

function Component() {
  const [count, setCount] = createSignal(0)
  const doubleCount = createMemo(() => count() * 2)
  
  return (
    <div>
      <div>{count()}</div>
      <div>{doubleCount()}</div>
    </div>
  )
}`,

  alpine: `<div x-data="{ count: 0 }">
  <div x-text="count"></div>
  <div x-text="count * 2"></div>
</div>`,
};
