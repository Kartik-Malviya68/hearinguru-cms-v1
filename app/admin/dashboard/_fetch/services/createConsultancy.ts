import { api } from "../api";
import { ConsultancieInstance } from "../instance";

export default async function createConsultancie(
  data: ConsultancyTypes.AddNewConsultancy
) {
  await ConsultancieInstance.post(api.createConsultancy, data, {
    withCredentials: true,
  });
}
