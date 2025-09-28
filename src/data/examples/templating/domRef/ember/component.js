import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class DomRefComponent extends Component {
  @tracked inputValue = "";

  @action
  focusInput() {
    // In Ember, you typically use modifiers or element helpers
    // for direct DOM manipulation
    const input = document.querySelector("input");
    if (input) {
      input.focus();
      this.inputValue = input.value;
    }
  }
}
