import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import fetchBlogData from "../_fetch/services/getBlogData";

export default class ServerActions extends ServerStateUtils<BlogTypes.State> {
  async fetchBlogData() {
    const res = await this.handleAsync("fetchBlogData", () => fetchBlogData());
    if (res) {
      this.mutateState((v) => {
        v.data = res;
      });
    }
  }
}
