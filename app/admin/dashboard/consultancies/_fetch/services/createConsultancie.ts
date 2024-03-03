import { api } from "../api";
import { createConsultancieInstance } from "../instance";

export default async function createConsultancie(
  data: ConsultancyTypes.AddNewConsultancy
) {
  return {
    data: {
      data,
      message: "Successfully created Consultancy",
    },
  };
  //   await createConsultancieInstance.post(api.createConsultancie, data, {
  //     withCredentials: true,
  //   });
}
