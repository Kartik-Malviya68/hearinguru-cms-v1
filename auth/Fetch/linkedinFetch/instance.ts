import AxiosFactory from "@/modules/axios/AxiosFactory";

export const LinkedinInstance = AxiosFactory.createInstance({
  baseURL: 'webV1/auth/linkedin/'
});