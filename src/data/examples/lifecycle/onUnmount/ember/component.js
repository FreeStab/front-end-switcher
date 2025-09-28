import Component from "@glimmer/component";

export default class OnUnmountComponent extends Component {
  willDestroy() {
    super.willDestroy(...arguments);
    console.log("Component will unmount");
    // Cleanup logic here
  }
}
