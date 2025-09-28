import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ParentComponent extends Component {
  @tracked pageTitle = "Hello World";
  @tracked counter = 42;
  @tracked isActive = true;
}
