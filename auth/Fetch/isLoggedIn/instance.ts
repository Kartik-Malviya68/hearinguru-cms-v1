import AxiosFactory from "@/modules/axios/AxiosFactory";

export const IsLoggedInInstance = AxiosFactory.createInstance({
  baseURL: 'webV1/auth/isloggedIn/'
})