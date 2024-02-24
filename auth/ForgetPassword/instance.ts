import AxiosFactory from "@/modules/axios/AxiosFactory";

export const ForgetPasswordInstance = AxiosFactory.createInstance({
  baseURL: 'webV1/auth/forgetPassword/'
})