import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class LoadingStatesComponent extends Component {
  @tracked data = null;
  @tracked loading = true;
  @tracked error = null;

  constructor() {
    super(...arguments);
    this.fetchData();
  }

  @action
  async fetchData() {
    this.loading = true;
    this.error = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("/api/items");
      if (!response.ok) throw new Error("Failed to load");
      this.data = await response.json();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  @action
  retry() {
    this.fetchData();
  }

  get skeletonItems() {
    return [1, 2, 3];
  }
}
