/**
 * Index file for emitToParent example
 * This example demonstrates event emission and communication between parent and child components
 */

// Import all framework files from their organized folders
import vue2Parent from "./vue2/Parent.vue?raw";
import vue2Child from "./vue2/ChildComponent.vue?raw";
import vue3Parent from "./vue3/Parent.vue?raw";
import vue3Child from "./vue3/ChildComponent.vue?raw";
import reactParent from "./react/Parent.jsx?raw";
import reactChild from "./react/ChildComponent.jsx?raw";
import svelte4Parent from "./svelte4/Parent.svelte?raw";
import svelte4Child from "./svelte4/ChildComponent.svelte?raw";
import svelte5Parent from "./svelte5/Parent.svelte?raw";
import svelte5Child from "./svelte5/ChildComponent.svelte?raw";
import angularParent from "./angular/parent.component.ts?raw";
import angularChild from "./angular/child.component.ts?raw";
import angularRenaissanceParent from "./angular-renaissance/parent.component.ts?raw";
import angularRenaissanceChild from "./angular-renaissance/child.component.ts?raw";
import emberParentHbs from "./ember/parent.hbs?raw";
import emberParentJs from "./ember/parent.js?raw";
import emberChildHbs from "./ember/child.hbs?raw";
import emberChildJs from "./ember/child.js?raw";
import solidParent from "./solid/Parent.jsx?raw";
import solidChild from "./solid/ChildComponent.jsx?raw";
import alpineParent from "./alpine/Parent.html?raw";
import alpineChild from "./alpine/ChildComponent.html?raw";

// Export structured data for all frameworks with multiple files
export const vue2 = {
  files: [
    {
      name: "Parent.vue",
      content: vue2Parent,
    },
    {
      name: "ChildComponent.vue",
      content: vue2Child,
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
      name: "ChildComponent.vue",
      content: vue3Child,
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
      name: "ChildComponent.jsx",
      content: reactChild,
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
      name: "ChildComponent.svelte",
      content: svelte4Child,
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
      name: "ChildComponent.svelte",
      content: svelte5Child,
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
      name: "child.component.ts",
      content: angularChild,
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
      name: "child.component.ts",
      content: angularRenaissanceChild,
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
      name: "parent.js",
      content: emberParentJs,
    },
    {
      name: "child.hbs",
      content: emberChildHbs,
    },
    {
      name: "child.js",
      content: emberChildJs,
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
      name: "ChildComponent.jsx",
      content: solidChild,
    },
  ],
};

export const alpine = {
  files: [
    {
      name: "Parent.html",
      content: alpineParent,
    },
    {
      name: "ChildComponent.html",
      content: alpineChild,
    },
  ],
};
