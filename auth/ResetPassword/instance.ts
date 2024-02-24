import AxiosFactory from "@/modules/axios/AxiosFactory";

export const ResetPasswordInstance = AxiosFactory.createInstance({
  baseURL: 'webV1/pages/resetPassword'
})