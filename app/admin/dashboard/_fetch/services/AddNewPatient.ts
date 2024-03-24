import { api } from "../api";
import { ConsultancieInstance } from "../instance";

export default async function addNewPatient(
  data: ConsultancyTypes.AddNewPatient
) {
  await ConsultancieInstance.post(api.createPatient, data, {
    withCredentials: true,
  });
}
