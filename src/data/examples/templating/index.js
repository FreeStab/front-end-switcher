/**
 * Templating Examples
 * Examples demonstrating basic templating, styling, loops, events, DOM refs, and conditionals
 */

// Import minimalTemplate from separate files
import {
  vue2,
  vue3,
  react,
  svelte4,
  svelte5,
  angular,
  angularRenaissance,
  ember,
  solid,
  alpine,
} from "./minimalTemplate/index.js";

// Import organized examples
import { styling } from "./styling/index.js";
import { loop } from "./loop/index.js";
import { eventClick } from "./eventClick/index.js";
import { domRef } from "./domRef/index.js";
import { conditional } from "./conditional/index.js";

export const minimalTemplate = {
  vue2,
  vue3,
  react,
  svelte4,
  svelte5,
  angular,
  "angular-renaissance": angularRenaissance,
  ember,
  solid,
  alpine,
};

// Export organized styling
export { styling };

// Export organized loop
export { loop };

// Export organized eventClick
export { eventClick };

// Export organized domRef
export { domRef };

// Export organized conditional
export { conditional };
