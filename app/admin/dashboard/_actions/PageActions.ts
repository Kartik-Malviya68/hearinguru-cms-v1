import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import getAllConsultancie from "../_fetch/services/getAllConsultancie";
import createConsultancie from "../_fetch/services/createConsultancy";
import addNewPatient from "../_fetch/services/AddNewPatient";
import getAllPatientList from "../_fetch/services/getPatientList";

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
  async getAllPatientList() {
    const res = await this.handleAsync("getAllPatientList", () =>
      getAllPatientList()
    );
    if (res) {
      this.mutateState((v) => {
        v.patientList;
      });
    }
  }
  async createConsultancie(data: ConsultancyTypes.ConsultancyDocument) {
    const res = await this.handleAsync("createConsultancie", () =>
      createConsultancie(data)
    );
    if (res) {
      this.mutateState((v) => {
        v.createConsultancy;
      });
    }
  }
  async createPatient(data: ConsultancyTypes.AddNewPatient) {
    const res = await this.handleAsync("createPatient", () =>
      addNewPatient(data)
    );
    if (res) {
      this.mutateState((v) => {
        v.createPatient;
      });
    }
  }
}
