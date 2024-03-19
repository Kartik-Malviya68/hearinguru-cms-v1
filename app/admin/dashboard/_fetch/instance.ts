import AxiosFactory from "@/modules/axios/AxiosFactory";

export const ConsultancieInstance = AxiosFactory.createInstance({
  baseURL: "admin/dashboard/",
});
