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

export const selectDropdown = {
  vue2: {
    files: [
      {
        name: "Component.vue",
        code: vue2Code,
        language: "vue",
      },
    ],
  },
  vue3: {
    files: [
      {
        name: "Component.vue",
        code: vue3Code,
        language: "vue",
      },
    ],
  },
  react: {
    files: [
      {
        name: "Component.jsx",
        code: reactCode,
        language: "jsx",
      },
    ],
  },
  svelte4: {
    files: [
      {
        name: "Component.svelte",
        code: svelte4Code,
        language: "svelte",
      },
    ],
  },
  svelte5: {
    files: [
      {
        name: "Component.svelte",
        code: svelte5Code,
        language: "svelte",
      },
    ],
  },
  angular: {
    files: [
      {
        name: "component.ts",
        code: angularCode,
        language: "typescript",
      },
    ],
  },
  "angular-renaissance": {
    files: [
      {
        name: "component.ts",
        code: angularRenaissanceCode,
        language: "typescript",
      },
    ],
  },
  ember: {
    files: [
      {
        name: "component.js",
        code: emberComponentCode,
        language: "javascript",
      },
      {
        name: "component.hbs",
        code: emberTemplateCode,
        language: "handlebars",
      },
    ],
  },
  solid: {
    files: [
      {
        name: "Component.jsx",
        code: solidCode,
        language: "jsx",
      },
    ],
  },
  alpine: {
    files: [
      {
        name: "Component.html",
        code: alpineCode,
        language: "html",
      },
    ],
  },
};
