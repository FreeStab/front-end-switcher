import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class extends Component {
  @tracked isActive = true;

  get styles() {
    return {
      color: "blue",
      fontSize: "16px",
    };
  }
}
