import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ChildComponent extends Component {
  @action
  increment() {
    this.args.onIncrement?.();
  }

  @action
  decrement() {
    this.args.onDecrement?.();
  }
}
