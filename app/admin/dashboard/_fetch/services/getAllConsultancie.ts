import { api } from "../api";
import { ConsultancieInstance } from "../instance";

export default async function getAllConsultancie() {
  return ConsultancieInstance.get<ConsultancyTypes.ConsultanciesTable>(
    api.allConsultancies,
    { withCredentials: true }
  );
}
// export default async function getAllConsultancie(
//   data: ConsultancyTypes.AddNewConsultancy
// ) {
//   // data: {
//   //   data,
//   //   message: "Successfully created Consultancy",
//   // },

//   await getConsultancieInstance.post(api.getConsultancies);

//   // await getConsultancieInstance.post(api.getConsultancies, data, {
//   //   withCredentials: true,
//   // });
// }
