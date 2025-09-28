import Component from "@glimmer/component";

export default class ChildComponent extends Component {
  // Arguments are accessed via @args
  get title() {
    return this.args.title;
  }

  get count() {
    return this.args.count ?? 0;
  }

  get isActive() {
    return this.args.isActive ?? false;
  }
}
