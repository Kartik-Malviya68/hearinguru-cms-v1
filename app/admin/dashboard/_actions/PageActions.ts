import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import getAllConsultancie from "../_fetch/services/getAllConsultancie";
import createConsultancie from "../_fetch/services/createConsultancy";

export default class ServerActions extends ServerStateUtils<ConsultancyTypes.State> {
  async getAllConsultancie() {
    const res = await this.handleAsync("fetchCompany", () =>
      getAllConsultancie()
    );
    if (res) {
      this.mutateState((v) => {
        v.loading;
      });
    }
  }
  async createConsultancie(data: ConsultancyTypes.AddNewConsultancy) {
    const res = await this.handleAsync("createConsultancie", () =>
      createConsultancie(data)
    );
    if (res) {
      this.mutateState((v) => {
        v.createConsultancy;
      });
    }
  }
}
