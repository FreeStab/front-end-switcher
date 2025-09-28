import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ConditionalComponent extends Component {
  @tracked isVisible = true;
  @tracked count = 3;

  @action
  toggle() {
    this.isVisible = !this.isVisible;
    this.count++;
  }
}
