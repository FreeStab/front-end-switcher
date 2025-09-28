import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class AsyncComponent extends Component {
  @tracked data = null;
  @tracked loading = false;
  @tracked error = null;

  @action
  async fetchData() {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch("/api/data");
      if (!response.ok) throw new Error("Failed to fetch");
      this.data = await response.json();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}
