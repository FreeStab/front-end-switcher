import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CheckboxComponent extends Component {
  @tracked isChecked = false;
  @tracked selectedOptions = [];

  options = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "vue", label: "Vue.js" },
    { id: "react", label: "React" },
  ];

  @action
  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  @action
  toggleOption(optionId) {
    if (this.selectedOptions.includes(optionId)) {
      this.selectedOptions = this.selectedOptions.filter(
        (id) => id !== optionId
      );
    } else {
      this.selectedOptions = [...this.selectedOptions, optionId];
    }
  }
}
