// Vue 2
import vue2Parent from "./vue2/Parent.vue?raw";
import vue2Card from "./vue2/CardComponent.vue?raw";

// Vue 3
import vue3Parent from "./vue3/Parent.vue?raw";
import vue3Card from "./vue3/CardComponent.vue?raw";

export const vue2 = {
  files: [
    {
      name: "Parent.vue",
      content: vue2Parent,
    },
    {
      name: "CardComponent.vue",
      content: vue2Card,
    },
  ],
};

export const vue3 = {
  files: [
    {
      name: "Parent.vue",
      content: vue3Parent,
    },
    {
      name: "CardComponent.vue",
      content: vue3Card,
    },
  ],
};

// For now, keep other frameworks as strings (will be organized later)
export const react = `// Parent Component
import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </CardComponent>
      
      {/* Card without content (will show fallback) */}
      <CardComponent />
    </div>
  )
}

// Card Component with fallback
import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

function CardComponent({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        {children || (
          <>
            <h2>Default Title</h2>
            <p>No content provided</p>
          </>
        )}
      </div>
    </div>
  )
}`;

export const svelte4 = `<!-- Parent.svelte -->
<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  <!-- Card without content (will show fallback) -->
  <CardComponent />
</div>

<!-- CardComponent.svelte with fallback -->
<div class="card">
  <div class="card-body">
    <slot>
      <!-- Fallback content -->
      <h2>Default Title</h2>
      <p>No content provided</p>
    </slot>
  </div>
</div>`;

export const svelte5 = `<!-- Parent.svelte -->
<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  <!-- Card without content (will show fallback) -->
  <CardComponent />
</div>

<!-- CardComponent.svelte with fallback -->
<script>
  let { children } = $props()
</script>

<div class="card">
  <div class="card-body">
    {#if children}
      {@render children()}
    {:else}
      <!-- Fallback content -->
      <h2>Default Title</h2>
      <p>No content provided</p>
    {/if}
  </div>
</div>`;

export const angular = `// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </app-card>
      
      <!-- Card without content (will show fallback) -->
      <app-card></app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component with fallback
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content select="[slot=content]">
          <!-- Fallback content -->
          <h2>Default Title</h2>
          <p>No content provided</p>
        </ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {}`;

export const angularRenaissance = `// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </app-card>
      
      <!-- Card without content (will show fallback) -->
      <app-card></app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component with fallback
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content>
          <!-- Fallback content -->
          <h2>Default Title</h2>
          <p>No content provided</p>
        </ng-content>
      </div>
    </div>
  \`,
  standalone: true
})
export class CardComponent {}`;

export const ember = `{{!-- Parent Component Template --}}
<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  {{!-- Card without content (will show fallback) --}}
  <CardComponent />
</div>

{{!-- Card Component Template with fallback --}}
<div class="card">
  <div class="card-body">
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      {{!-- Fallback content --}}
      <h2>Default Title</h2>
      <p>No content provided</p>
    {{/if}}
  </div>
</div>`;

export const solid = `// Parent Component
import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </CardComponent>
      
      {/* Card without content (will show fallback) */}
      <CardComponent />
    </div>
  )
}

// Card Component with fallback
import { JSX, children } from 'solid-js'

interface CardProps {
  children?: JSX.Element
}

function CardComponent(props: CardProps) {
  const content = children(() => props.children)
  
  return (
    <div class="card">
      <div class="card-body">
        {content() || (
          <>
            <h2>Default Title</h2>
            <p>No content provided</p>
          </>
        )}
      </div>
    </div>
  )
}`;

export const alpine = `<div x-data="{ hasContent: false }">
  <!-- Card with content -->
  <div class="card" x-data="{ hasContent: true }">
    <div class="card-body">
      <template x-if="hasContent">
        <div>
          <h2>Custom Title</h2>
          <p>Custom content provided</p>
        </div>
      </template>
      <template x-if="!hasContent">
        <div>
          <h2>Default Title</h2>
          <p>No content provided</p>
        </div>
      </template>
    </div>
  </div>
  
  <!-- Card without content (will show fallback) -->
  <div class="card" x-data="{ hasContent: false }">
    <div class="card-body">
      <template x-if="!hasContent">
        <div>
          <h2>Default Title</h2>
          <p>No content provided</p>
        </div>
      </template>
    </div>
  </div>
</div>`;
