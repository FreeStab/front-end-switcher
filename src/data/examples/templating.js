/**
 * Templating Examples
 * Examples demonstrating basic templating, styling, loops, events, DOM refs, and conditionals
 */

export const minimalTemplate = {
  vue2: `<template>
  <div>Hello World</div>
</template>`,

  vue3: `<template>
  <div>Hello World</div>
</template>`,

  react: `function Component() {
  return <div>Hello World</div>
}`,

  svelte4: `<div>Hello World</div>`,

  svelte5: `<div>Hello World</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-hello',
  template: '<div>Hello World</div>'
})
export class HelloComponent {}`,

  "angular-renaissance": `import { Component } from '@angular/core'

@Component({
  selector: 'app-hello',
  template: '<div>Hello World</div>',
  standalone: true
})
export class HelloComponent {}`,

  ember: `{{!-- template --}}
<div>Hello World</div>`,

  solid: `function Component() {
  return <div>Hello World</div>
}`,

  alpine: `<div>Hello World</div>`,
};

export const styling = {
  vue2: `<template>
  <div class="container">
    <p :class="{ active: isActive }" :style="styles">
      Styled content
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      styles: {
        color: 'blue',
        fontSize: '16px'
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
.active {
  font-weight: bold;
}
</style>`,

  vue3: `<template>
  <div class="container">
    <p :class="{ active: isActive }" :style="styles">
      Styled content
    </p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isActive = ref(true)
const styles = reactive({
  color: 'blue',
  fontSize: '16px'
})
</script>

<style scoped>
.container {
  padding: 20px;
}
.active {
  font-weight: bold;
}
</style>`,

  react: `import { useState } from 'react'
import styles from './Component.module.css'

function Component() {
  const [isActive, setIsActive] = useState(true)
  
  const inlineStyles = {
    color: 'blue',
    fontSize: '16px'
  }
  
  return (
    <div className={styles.container}>
      <p 
        className={isActive ? styles.active : ''} 
        style={inlineStyles}
      >
        Styled content
      </p>
    </div>
  )
}`,

  svelte4: `<script>
  let isActive = true
  
  $: styles = {
    color: 'blue',
    fontSize: '16px'
  }
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
</style>`,

  svelte5: `<script>
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
</style>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div class="container">
      <p [class.active]="isActive" [ngStyle]="styles">
        Styled content
      </p>
    </div>
  \`,
  styles: [\`
    .container {
      padding: 20px;
    }
    .active {
      font-weight: bold;
    }
  \`]
})
export class AppComponent {
  isActive = true
  styles = {
    color: 'blue',
    'font-size': '16px'
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <div class="container">
      <p [class.active]="isActive()" [ngStyle]="styles()">
        Styled content
      </p>
    </div>
  \`,
  styles: [\`
    .container {
      padding: 20px;
    }
    .active {
      font-weight: bold;
    }
  \`]
})
export class AppComponent {
  isActive = signal(true)
  styles = signal({
    color: 'blue',
    'font-size': '16px'
  })
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class extends Component {
  @tracked isActive = true
  
  get styles() {
    return {
      color: 'blue',
      fontSize: '16px'
    }
  }
}

{{!-- template --}}
<div class="container">
  <p class={{if this.isActive "active"}} style={{html-safe this.inlineStyles}}>
    Styled content
  </p>
</div>`,

  solid: `import { createSignal } from 'solid-js'

function Component() {
  const [isActive, setIsActive] = createSignal(true)
  
  const styles = () => ({
    color: 'blue',
    fontSize: '16px'
  })
  
  return (
    <div class="container">
      <p classList={{ active: isActive() }} style={styles()}>
        Styled content
      </p>
    </div>
  )
}`,

  alpine: `<div x-data="{ isActive: true, styles: { color: 'blue', fontSize: '16px' } }">
  <div class="container">
    <p :class="{ active: isActive }" :style="styles">
      Styled content
    </p>
  </div>
</div>

<style>
  .container {
    padding: 20px;
  }
  .active {
    font-weight: bold;
  }
</style>`,
};

export const loop = {
  vue2: `<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
      ]
    }
  }
}
</script>`,

  vue3: `<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' }
])
</script>`,

  react: `function Component() {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}`,

  svelte4: `<script>
  let items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]
</script>

<ul>
  {#each items as item (item.id)}
    <li>{item.name}</li>
  {/each}
</ul>`,

  svelte5: `<script>
  let items = $state([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ])
</script>

<ul>
  {#each items as item (item.id)}
    <li>{item.name}</li>
  {/each}
</ul>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <ul>
      <li *ngFor="let item of items; trackBy: trackByFn">
        {{ item.name }}
      </li>
    </ul>
  \`
})
export class AppComponent {
  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]
  
  trackByFn(index: number, item: any) {
    return item.id
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-component',
  template: \`
    <ul>
      <li *ngFor="let item of items(); trackBy: trackByFn">
        {{ item.name }}
      </li>
    </ul>
  \`
})
export class AppComponent {
  items = signal([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ])
  
  trackByFn(index: number, item: any) {
    return item.id
  }
}`,

  ember: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class extends Component {
  @tracked items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]
}

{{!-- template --}}
<ul>
  {{#each this.items key="id" as |item|}}
    <li>{{item.name}}</li>
  {{/each}}
</ul>`,

  solid: `import { createSignal, For } from 'solid-js'

function Component() {
  const [items] = createSignal([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ])
  
  return (
    <ul>
      <For each={items()}>
        {(item) => <li>{item.name}</li>}
      </For>
    </ul>
  )
}`,

  alpine: `<div x-data="{ 
  items: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]
}">
  <ul>
    <template x-for="item in items" :key="item.id">
      <li x-text="item.name"></li>
    </template>
  </ul>
</div>`,
};

export const eventClick = {
  vue2: `<template>
  <div>
    <button @click="handleClick">Click me!</button>
    <p>Clicked {{ count }} times</p>
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
    handleClick() {
      this.count++
      console.log('Button clicked!')
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <button @click="handleClick">Click me!</button>
    <p>Clicked {{ count }} times</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const handleClick = () => {
  count.value++
  console.log('Button clicked!')
}
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log('Button clicked!')
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Clicked {count} times</p>
    </div>
  )
}`,

  svelte4: `<script>
  let count = 0

  function handleClick() {
    count++
    console.log('Button clicked!')
  }
</script>

<div>
  <button on:click={handleClick}>Click me!</button>
  <p>Clicked {count} times</p>
</div>`,

  svelte5: `<script>
  let count = $state(0)

  function handleClick() {
    count++
    console.log('Button clicked!')
  }
</script>

<div>
  <button onclick={handleClick}>Click me!</button>
  <p>Clicked {count} times</p>
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-click',
  template: \`
    <div>
      <button (click)="handleClick()">Click me!</button>
      <p>Clicked {{ count }} times</p>
    </div>
  \`
})
export class ClickComponent {
  count = 0

  handleClick() {
    this.count++
    console.log('Button clicked!')
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-click',
  template: \`
    <div>
      <button (click)="handleClick()">Click me!</button>
      <p>Clicked {{ count() }} times</p>
    </div>
  \`,
  standalone: true
})
export class ClickComponent {
  count = signal(0)

  handleClick() {
    this.count.update(c => c + 1)
    console.log('Button clicked!')
  }
}`,

  ember: `{{!-- template --}}
<div>
  <button type="button" {{on "click" this.handleClick}}>
    Click me!
  </button>
  <p>Clicked {{this.count}} times</p>
</div>

{{!-- component.js --}}
import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ClickComponent extends Component {
  @tracked count = 0

  @action
  handleClick() {
    this.count++
    console.log('Button clicked!')
  }
}`,

  solid: `import { createSignal } from 'solid-js'

function Component() {
  const [count, setCount] = createSignal(0)

  const handleClick = () => {
    setCount(count() + 1)
    console.log('Button clicked!')
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Clicked {count()} times</p>
    </div>
  )
}`,

  alpine: `<div x-data="{ count: 0 }">
  <button @click="count++; console.log('Button clicked!')">
    Click me!
  </button>
  <p>Clicked <span x-text="count"></span> times</p>
</div>`,
};

export const domRef = {
  vue2: `<template>
  <div>
    <input ref="inputRef" type="text" placeholder="Focus me!" />
    <button @click="focusInput">Focus Input</button>
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    focusInput() {
      this.$refs.inputRef.focus()
      this.inputValue = this.$refs.inputRef.value
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <input ref="inputRef" type="text" placeholder="Focus me!" />
    <button @click="focusInput">Focus Input</button>
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputRef = ref(null)
const inputValue = ref('')

const focusInput = () => {
  inputRef.value.focus()
  inputValue.value = inputRef.value.value
}
</script>`,

  react: `import { useRef, useState } from 'react'

function Component() {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const focusInput = () => {
    inputRef.current.focus()
    setInputValue(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Input value: {inputValue}</p>
    </div>
  )
}`,

  svelte4: `<script>
  let inputRef
  let inputValue = ''

  function focusInput() {
    inputRef.focus()
    inputValue = inputRef.value
  }
</script>

<div>
  <input bind:this={inputRef} type="text" placeholder="Focus me!" />
  <button on:click={focusInput}>Focus Input</button>
  <p>Input value: {inputValue}</p>
</div>`,

  svelte5: `<script>
  let inputRef
  let inputValue = $state('')

  function focusInput() {
    inputRef.focus()
    inputValue = inputRef.value
  }
</script>

<div>
  <input bind:this={inputRef} type="text" placeholder="Focus me!" />
  <button onclick={focusInput}>Focus Input</button>
  <p>Input value: {inputValue}</p>
</div>`,

  angular: `import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-dom-ref',
  template: \`
    <div>
      <input #inputRef type="text" placeholder="Focus me!" />
      <button (click)="focusInput()">Focus Input</button>
      <p>Input value: {{ inputValue }}</p>
    </div>
  \`
})
export class DomRefComponent {
  @ViewChild('inputRef', { static: true }) inputRef!: ElementRef
  inputValue = ''

  focusInput() {
    this.inputRef.nativeElement.focus()
    this.inputValue = this.inputRef.nativeElement.value
  }
}`,

  "angular-renaissance": `import { Component, ElementRef, ViewChild, signal } from '@angular/core'

@Component({
  selector: 'app-dom-ref',
  template: \`
    <div>
      <input #inputRef type="text" placeholder="Focus me!" />
      <button (click)="focusInput()">Focus Input</button>
      <p>Input value: {{ inputValue() }}</p>
    </div>
  \`,
  standalone: true
})
export class DomRefComponent {
  @ViewChild('inputRef', { static: true }) inputRef!: ElementRef
  inputValue = signal('')

  focusInput() {
    this.inputRef.nativeElement.focus()
    this.inputValue.set(this.inputRef.nativeElement.value)
  }
}`,

  ember: `{{!-- template --}}
<div>
  <Input @value={{this.inputValue}} placeholder="Focus me!" />
  <button type="button" {{on "click" this.focusInput}}>
    Focus Input
  </button>
  <p>Input value: {{this.inputValue}}</p>
</div>

{{!-- component.js --}}
import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class DomRefComponent extends Component {
  @tracked inputValue = ''

  @action
  focusInput() {
    // In Ember, you typically use modifiers or element helpers
    // for direct DOM manipulation
    const input = document.querySelector('input')
    if (input) {
      input.focus()
      this.inputValue = input.value
    }
  }
}`,

  solid: `import { createSignal } from 'solid-js'

function Component() {
  let inputRef
  const [inputValue, setInputValue] = createSignal('')

  const focusInput = () => {
    inputRef.focus()
    setInputValue(inputRef.value)
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Input value: {inputValue()}</p>
    </div>
  )
}`,

  alpine: `<div x-data="{ inputValue: '' }">
  <input x-ref="input" type="text" placeholder="Focus me!" />
  <button @click="$refs.input.focus(); inputValue = $refs.input.value">
    Focus Input
  </button>
  <p>Input value: <span x-text="inputValue"></span></p>
</div>`,
};

export const conditional = {
  vue2: `<template>
  <div>
    <button @click="toggle">Toggle</button>
    <p v-if="isVisible">This is visible!</p>
    <p v-else>This is hidden!</p>
    
    <div v-show="isVisible">
      <h3>Conditional Content</h3>
      <p v-if="count > 5">Count is greater than 5: {{ count }}</p>
      <p v-else-if="count > 0">Count is between 1 and 5: {{ count }}</p>
      <p v-else>Count is 0 or negative</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      count: 3
    }
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible
      this.count++
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <button @click="toggle">Toggle</button>
    <p v-if="isVisible">This is visible!</p>
    <p v-else>This is hidden!</p>
    
    <div v-show="isVisible">
      <h3>Conditional Content</h3>
      <p v-if="count > 5">Count is greater than 5: {{ count }}</p>
      <p v-else-if="count > 0">Count is between 1 and 5: {{ count }}</p>
      <p v-else>Count is 0 or negative</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
const count = ref(3)

const toggle = () => {
  isVisible.value = !isVisible.value
  count.value++
}
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [isVisible, setIsVisible] = useState(true)
  const [count, setCount] = useState(3)

  const toggle = () => {
    setIsVisible(!isVisible)
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isVisible ? (
        <p>This is visible!</p>
      ) : (
        <p>This is hidden!</p>
      )}
      
      {isVisible && (
        <div>
          <h3>Conditional Content</h3>
          {count > 5 ? (
            <p>Count is greater than 5: {count}</p>
          ) : count > 0 ? (
            <p>Count is between 1 and 5: {count}</p>
          ) : (
            <p>Count is 0 or negative</p>
          )}
        </div>
      )}
    </div>
  )
}`,

  svelte4: `<script>
  let isVisible = true
  let count = 3

  function toggle() {
    isVisible = !isVisible
    count++
  }
</script>

<div>
  <button on:click={toggle}>Toggle</button>
  
  {#if isVisible}
    <p>This is visible!</p>
  {:else}
    <p>This is hidden!</p>
  {/if}
  
  {#if isVisible}
    <div>
      <h3>Conditional Content</h3>
      {#if count > 5}
        <p>Count is greater than 5: {count}</p>
      {:else if count > 0}
        <p>Count is between 1 and 5: {count}</p>
      {:else}
        <p>Count is 0 or negative</p>
      {/if}
    </div>
  {/if}
</div>`,

  svelte5: `<script>
  let isVisible = $state(true)
  let count = $state(3)

  function toggle() {
    isVisible = !isVisible
    count++
  }
</script>

<div>
  <button onclick={toggle}>Toggle</button>
  
  {#if isVisible}
    <p>This is visible!</p>
  {:else}
    <p>This is hidden!</p>
  {/if}
  
  {#if isVisible}
    <div>
      <h3>Conditional Content</h3>
      {#if count > 5}
        <p>Count is greater than 5: {count}</p>
      {:else if count > 0}
        <p>Count is between 1 and 5: {count}</p>
      {:else}
        <p>Count is 0 or negative</p>
      {/if}
    </div>
  {/if}
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-conditional',
  template: \`
    <div>
      <button (click)="toggle()">Toggle</button>
      
      <p *ngIf="isVisible; else hiddenTemplate">This is visible!</p>
      <ng-template #hiddenTemplate>
        <p>This is hidden!</p>
      </ng-template>
      
      <div *ngIf="isVisible">
        <h3>Conditional Content</h3>
        <p *ngIf="count > 5">Count is greater than 5: {{ count }}</p>
        <p *ngIf="count > 0 && count <= 5">Count is between 1 and 5: {{ count }}</p>
        <p *ngIf="count <= 0">Count is 0 or negative</p>
      </div>
    </div>
  \`
})
export class ConditionalComponent {
  isVisible = true
  count = 3

  toggle() {
    this.isVisible = !this.isVisible
    this.count++
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-conditional',
  template: \`
    <div>
      <button (click)="toggle()">Toggle</button>
      
      @if (isVisible()) {
        <p>This is visible!</p>
      } @else {
        <p>This is hidden!</p>
      }
      
      @if (isVisible()) {
        <div>
          <h3>Conditional Content</h3>
          @if (count() > 5) {
            <p>Count is greater than 5: {{ count() }}</p>
          } @else if (count() > 0) {
            <p>Count is between 1 and 5: {{ count() }}</p>
          } @else {
            <p>Count is 0 or negative</p>
          }
        </div>
      }
    </div>
  \`,
  standalone: true
})
export class ConditionalComponent {
  isVisible = signal(true)
  count = signal(3)

  toggle() {
    this.isVisible.update(visible => !visible)
    this.count.update(c => c + 1)
  }
}`,

  ember: `{{!-- template --}}
<div>
  <button type="button" {{on "click" this.toggle}}>
    Toggle
  </button>
  
  {{#if this.isVisible}}
    <p>This is visible!</p>
  {{else}}
    <p>This is hidden!</p>
  {{/if}}
  
  {{#if this.isVisible}}
    <div>
      <h3>Conditional Content</h3>
      {{#if (gt this.count 5)}}
        <p>Count is greater than 5: {{this.count}}</p>
      {{else if (gt this.count 0)}}
        <p>Count is between 1 and 5: {{this.count}}</p>
      {{else}}
        <p>Count is 0 or negative</p>
      {{/if}}
    </div>
  {{/if}}
</div>

{{!-- component.js --}}
import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ConditionalComponent extends Component {
  @tracked isVisible = true
  @tracked count = 3

  @action
  toggle() {
    this.isVisible = !this.isVisible
    this.count++
  }
}`,

  solid: `import { createSignal } from 'solid-js'
import { Show } from 'solid-js'

function Component() {
  const [isVisible, setIsVisible] = createSignal(true)
  const [count, setCount] = createSignal(3)

  const toggle = () => {
    setIsVisible(!isVisible())
    setCount(count() + 1)
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      
      <Show when={isVisible()} fallback={<p>This is hidden!</p>}>
        <p>This is visible!</p>
      </Show>
      
      <Show when={isVisible()}>
        <div>
          <h3>Conditional Content</h3>
          <Show 
            when={count() > 5}
            fallback={
              <Show 
                when={count() > 0}
                fallback={<p>Count is 0 or negative</p>}
              >
                <p>Count is between 1 and 5: {count()}</p>
              </Show>
            }
          >
            <p>Count is greater than 5: {count()}</p>
          </Show>
        </div>
      </Show>
    </div>
  )
}`,

  alpine: `<div x-data="{ isVisible: true, count: 3 }">
  <button @click="isVisible = !isVisible; count++">Toggle</button>
  
  <p x-show="isVisible">This is visible!</p>
  <p x-show="!isVisible">This is hidden!</p>
  
  <div x-show="isVisible">
    <h3>Conditional Content</h3>
    <p x-show="count > 5">Count is greater than 5: <span x-text="count"></span></p>
    <p x-show="count > 0 && count <= 5">Count is between 1 and 5: <span x-text="count"></span></p>
    <p x-show="count <= 0">Count is 0 or negative</p>
  </div>
</div>`,
};
