import { api } from "../api";
import { LoginInstance } from "../instance";

interface Props {
  email: string;
  password: string;
}

export default async function defaultLoginService(props: Props) {
  return LoginInstance.post(api.login, props, { withCredentials: true });
}