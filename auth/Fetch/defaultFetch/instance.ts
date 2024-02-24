import AxiosFactory from "@/modules/axios/AxiosFactory";

export const DefaultLoginInstance = AxiosFactory.createInstance({
  baseURL: "webV1/auth/default/"
})