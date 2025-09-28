import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class extends Component {
  @tracked items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];
}
