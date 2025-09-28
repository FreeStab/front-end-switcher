// Vue 2
import vue2Component from "./vue2/Component.vue?raw";

// Vue 3
import vue3Component from "./vue3/Component.vue?raw";

// React
import reactComponent from "./react/Component.jsx?raw";

// Svelte 4
import svelte4Component from "./svelte4/Component.svelte?raw";

// Svelte 5
import svelte5Component from "./svelte5/Component.svelte?raw";

// Angular
import angularComponent from "./angular/component.ts?raw";

// Angular Renaissance
import angularRenaissanceComponent from "./angular-renaissance/component.ts?raw";

// Ember
import emberComponent from "./ember/component.js?raw";
import emberTemplate from "./ember/component.hbs?raw";

// SolidJS
import solidComponent from "./solid/Component.jsx?raw";

// Alpine.js
import alpineComponent from "./alpine/Component.html?raw";

export const loop = {
  vue2: {
    files: [{ name: "Component.vue", content: vue2Component }],
  },
  vue3: {
    files: [{ name: "Component.vue", content: vue3Component }],
  },
  react: {
    files: [{ name: "Component.jsx", content: reactComponent }],
  },
  svelte4: {
    files: [{ name: "Component.svelte", content: svelte4Component }],
  },
  svelte5: {
    files: [{ name: "Component.svelte", content: svelte5Component }],
  },
  angular: {
    files: [{ name: "component.ts", content: angularComponent }],
  },
  "angular-renaissance": {
    files: [{ name: "component.ts", content: angularRenaissanceComponent }],
  },
  ember: {
    files: [
      { name: "component.js", content: emberComponent },
      { name: "component.hbs", content: emberTemplate },
    ],
  },
  solid: {
    files: [{ name: "Component.jsx", content: solidComponent }],
  },
  alpine: {
    files: [{ name: "Component.html", content: alpineComponent }],
  },
};
