import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ComputedStateComponent extends Component {
  @tracked count = 0;

  get doubleCount() {
    return this.count * 2;
  }
}
