import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class OnMountComponent extends Component {
  @tracked message = "";

  constructor() {
    super(...arguments);
    this.message = "Component mounted!";
    console.log("Component mounted");
  }
}
