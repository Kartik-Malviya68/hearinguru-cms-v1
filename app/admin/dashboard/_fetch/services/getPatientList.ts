import { api } from "../api";
import { ConsultancieInstance } from "../instance";

export default async function getAllPatientList() {
  return ConsultancieInstance.get<ConsultancyTypes.AddNewPatient>(
    api.allPatients,
    { withCredentials: true }
  );
}
