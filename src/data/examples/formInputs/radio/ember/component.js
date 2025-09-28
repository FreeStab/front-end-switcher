import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class RadioComponent extends Component {
  @tracked selectedLanguage = "javascript";
  @tracked selectedLevel = "intermediate";

  languages = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "python", label: "Python" },
    { id: "rust", label: "Rust" },
  ];

  experienceLevels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];

  @action
  selectLanguage(languageId) {
    this.selectedLanguage = languageId;
  }

  @action
  selectLevel(levelId) {
    this.selectedLevel = levelId;
  }
}
