import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class UpdateStateComponent extends Component {
  @tracked count = 0;

  @action
  increment() {
    this.count++;
  }
}
