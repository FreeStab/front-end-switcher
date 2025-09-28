import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SuspenseComponent extends Component {
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
      const response = await fetch("/api/data");
      if (!response.ok) throw new Error("Failed to fetch");
      this.data = await response.json();
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }

  @action
  retry() {
    this.fetchData();
  }
}
