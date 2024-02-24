import AxiosFactory from "@/modules/axios/AxiosFactory";

export const LoginInstance = AxiosFactory.createInstance({
  baseURL: 'webV1/auth/default/'
})