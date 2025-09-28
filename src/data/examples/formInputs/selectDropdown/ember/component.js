import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SelectComponent extends Component {
  @tracked selectedCountry = "";
  @tracked selectedSkills = [];

  countries = [
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
  ];

  skills = [
    { id: "js", name: "JavaScript" },
    { id: "ts", name: "TypeScript" },
    { id: "vue", name: "Vue.js" },
    { id: "react", name: "React" },
    { id: "node", name: "Node.js" },
  ];

  @action
  updateCountry(event) {
    this.selectedCountry = event.target.value;
  }

  @action
  updateSkills(event) {
    this.selectedSkills = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
  }
}
