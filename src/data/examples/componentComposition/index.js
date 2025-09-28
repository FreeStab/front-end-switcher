/**
 * Component Composition Examples
 * Examples demonstrating component communication and composition patterns
 */

// Import emitToParent from separate files
import {
  vue2 as emitToParentVue2,
  vue3 as emitToParentVue3,
  react as emitToParentReact,
  svelte4 as emitToParentSvelte4,
  svelte5 as emitToParentSvelte5,
  angular as emitToParentAngular,
  angularRenaissance as emitToParentAngularRenaissance,
  ember as emitToParentEmber,
  solid as emitToParentSolid,
  alpine as emitToParentAlpine,
} from "./emitToParent/index.js";

// Import props from separate files
import {
  vue2 as propsVue2,
  vue3 as propsVue3,
  react as propsReact,
  svelte4 as propsSvelte4,
  svelte5 as propsSvelte5,
  angular as propsAngular,
  angularRenaissance as propsAngularRenaissance,
  ember as propsEmber,
  solid as propsSolid,
  alpine as propsAlpine,
} from "./props/index.js";

// Import slot from separate files
import {
  vue2 as slotVue2,
  vue3 as slotVue3,
  react as slotReact,
  svelte4 as slotSvelte4,
  svelte5 as slotSvelte5,
  angular as slotAngular,
  angularRenaissance as slotAngularRenaissance,
  ember as slotEmber,
  solid as slotSolid,
  alpine as slotAlpine,
} from "./slot/index.js";

// Import slotFallback from separate files
import {
  vue2 as slotFallbackVue2,
  vue3 as slotFallbackVue3,
  react as slotFallbackReact,
  svelte4 as slotFallbackSvelte4,
  svelte5 as slotFallbackSvelte5,
  angular as slotFallbackAngular,
  angularRenaissance as slotFallbackAngularRenaissance,
  ember as slotFallbackEmber,
  solid as slotFallbackSolid,
  alpine as slotFallbackAlpine,
} from "./slotFallback/index.js";

// Import context from separate files
import {
  vue2 as contextVue2,
  vue3 as contextVue3,
  react as contextReact,
  svelte4 as contextSvelte4,
  svelte5 as contextSvelte5,
  angular as contextAngular,
  angularRenaissance as contextAngularRenaissance,
  ember as contextEmber,
  solid as contextSolid,
  alpine as contextAlpine,
} from "./context/index.js";

export const props = {
  vue2: propsVue2,
  vue3: propsVue3,
  react: propsReact,
  svelte4: propsSvelte4,
  svelte5: propsSvelte5,
  angular: propsAngular,
  "angular-renaissance": propsAngularRenaissance,
  ember: propsEmber,
  solid: propsSolid,
  alpine: propsAlpine,
};

export const emitToParent = {
  vue2: emitToParentVue2,
  vue3: emitToParentVue3,
  react: emitToParentReact,
  svelte4: emitToParentSvelte4,
  svelte5: emitToParentSvelte5,
  angular: emitToParentAngular,
  "angular-renaissance": emitToParentAngularRenaissance,
  ember: emitToParentEmber,
  solid: emitToParentSolid,
  alpine: emitToParentAlpine,
};

export const slot = {
  vue2: slotVue2,
  vue3: slotVue3,
  react: slotReact,
  svelte4: slotSvelte4,
  svelte5: slotSvelte5,
  angular: slotAngular,
  "angular-renaissance": slotAngularRenaissance,
  ember: slotEmber,
  solid: slotSolid,
  alpine: slotAlpine,
};

export const slotFallback = {
  vue2: slotFallbackVue2,
  vue3: slotFallbackVue3,
  react: slotFallbackReact,
  svelte4: slotFallbackSvelte4,
  svelte5: slotFallbackSvelte5,
  angular: slotFallbackAngular,
  "angular-renaissance": slotFallbackAngularRenaissance,
  ember: slotFallbackEmber,
  solid: slotFallbackSolid,
  alpine: slotFallbackAlpine,
};

export const context = {
  vue2: contextVue2,
  vue3: contextVue3,
  react: contextReact,
  svelte4: contextSvelte4,
  svelte5: contextSvelte5,
  angular: contextAngular,
  "angular-renaissance": contextAngularRenaissance,
  ember: contextEmber,
  solid: contextSolid,
  alpine: contextAlpine,
};
