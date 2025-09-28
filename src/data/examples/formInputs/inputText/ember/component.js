import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class InputComponent extends Component {
  @tracked username = "";

  @action
  handleInput(event) {
    this.username = event.target.value;
    console.log("Input changed:", event.target.value);
  }
}
