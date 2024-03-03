import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import createConsultancie from "../_fetch/services/createConsultancie";

export default class ServerActions extends ServerStateUtils<ConsultancyTypes.State> {
  async createConsultancie(
    props: ConsultancyTypes.AddNewConsultancy,
    onSucces: () => void
  ) {
    this.handleAsync("AddNewConsultancy", () => createConsultancie(props), {
      successMessage: "Successfully created Consultancy",
      errMessage(err) {
        const res = err.response;
        if (res && res.data.message !== undefined) {
          return res.data.message;
        }
        return "failed to create Consultancy";
      },
      onSuccess: () => {
        onSucces();
      },
    });
  }
}
