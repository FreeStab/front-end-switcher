// Vue 2
import vue2Parent from "./vue2/Parent.vue?raw";
import vue2Card from "./vue2/CardComponent.vue?raw";

// Vue 3
import vue3Parent from "./vue3/Parent.vue?raw";
import vue3Card from "./vue3/CardComponent.vue?raw";

// React
import reactParent from "./react/Parent.jsx?raw";
import reactCard from "./react/CardComponent.tsx?raw";
import reactCardCss from "./react/Card.css?raw";

// Svelte 4
import svelte4Parent from "./svelte4/Parent.svelte?raw";
import svelte4Card from "./svelte4/CardComponent.svelte?raw";

// Svelte 5
import svelte5Parent from "./svelte5/Parent.svelte?raw";
import svelte5Card from "./svelte5/CardComponent.svelte?raw";

// Angular
import angularParent from "./angular/parent.component.ts?raw";
import angularCard from "./angular/card.component.ts?raw";

// Angular Renaissance
import angularRenaissanceParent from "./angular-renaissance/parent.component.ts?raw";
import angularRenaissanceCard from "./angular-renaissance/card.component.ts?raw";

// Ember
import emberParentHbs from "./ember/parent.hbs?raw";
import emberCardHbs from "./ember/card-component.hbs?raw";

// SolidJS
import solidParent from "./solid/Parent.jsx?raw";
import solidCard from "./solid/CardComponent.tsx?raw";
import solidCardCss from "./solid/Card.css?raw";

// Alpine.js
import alpineComponent from "./alpine/Component.html?raw";

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

export const react = {
  files: [
    {
      name: "Parent.jsx",
      content: reactParent,
    },
    {
      name: "CardComponent.tsx",
      content: reactCard,
    },
    {
      name: "Card.css",
      content: reactCardCss,
    },
  ],
};

export const svelte4 = {
  files: [
    {
      name: "Parent.svelte",
      content: svelte4Parent,
    },
    {
      name: "CardComponent.svelte",
      content: svelte4Card,
    },
  ],
};

export const svelte5 = {
  files: [
    {
      name: "Parent.svelte",
      content: svelte5Parent,
    },
    {
      name: "CardComponent.svelte",
      content: svelte5Card,
    },
  ],
};

export const angular = {
  files: [
    {
      name: "parent.component.ts",
      content: angularParent,
    },
    {
      name: "card.component.ts",
      content: angularCard,
    },
  ],
};

export const angularRenaissance = {
  files: [
    {
      name: "parent.component.ts",
      content: angularRenaissanceParent,
    },
    {
      name: "card.component.ts",
      content: angularRenaissanceCard,
    },
  ],
};

export const ember = {
  files: [
    {
      name: "parent.hbs",
      content: emberParentHbs,
    },
    {
      name: "card-component.hbs",
      content: emberCardHbs,
    },
  ],
};

export const solid = {
  files: [
    {
      name: "Parent.jsx",
      content: solidParent,
    },
    {
      name: "CardComponent.tsx",
      content: solidCard,
    },
    {
      name: "Card.css",
      content: solidCardCss,
    },
  ],
};

export const alpine = alpineComponent;
