import vue2Code from "./vue2/Component.vue?raw";
import vue3Code from "./vue3/Component.vue?raw";
import reactCode from "./react/Component.jsx?raw";
import svelte4Code from "./svelte4/Component.svelte?raw";
import svelte5Code from "./svelte5/Component.svelte?raw";
import angularCode from "./angular/component.ts?raw";
import angularRenaissanceCode from "./angular-renaissance/component.ts?raw";
import emberComponentCode from "./ember/component.js?raw";
import emberTemplateCode from "./ember/component.hbs?raw";
import solidCode from "./solid/Component.jsx?raw";
import alpineCode from "./alpine/Component.html?raw";

export const errorBoundaries = {
  vue2: {
    files: [
      {
        name: "Component.vue",
        content: vue2Code,
      },
    ],
  },
  vue3: {
    files: [
      {
        name: "Component.vue",
        content: vue3Code,
      },
    ],
  },
  react: {
    files: [
      {
        name: "Component.jsx",
        content: reactCode,
      },
    ],
  },
  svelte4: {
    files: [
      {
        name: "Component.svelte",
        content: svelte4Code,
      },
    ],
  },
  svelte5: {
    files: [
      {
        name: "Component.svelte",
        content: svelte5Code,
      },
    ],
  },
  angular: {
    files: [
      {
        name: "component.ts",
        content: angularCode,
      },
    ],
  },
  "angular-renaissance": {
    files: [
      {
        name: "component.ts",
        content: angularRenaissanceCode,
      },
    ],
  },
  ember: {
    files: [
      {
        name: "component.js",
        content: emberComponentCode,
      },
      {
        name: "component.hbs",
        content: emberTemplateCode,
      },
    ],
  },
  solid: {
    files: [
      {
        name: "Component.jsx",
        content: solidCode,
      },
    ],
  },
  alpine: {
    files: [
      {
        name: "Component.html",
        content: alpineCode,
      },
    ],
  },
};
