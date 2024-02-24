import { apis } from "../api";
import { DefaultLoginInstance } from "../instance";

export default async function defaultLogin(data: any) {
  await DefaultLoginInstance.post(apis.login, data, { withCredentials: true });
}