import { api } from "../api";
import { LoginInstance } from "../instance";

export interface SendSignupMailBody {
  firstName: string;
  lastName: string;
  phoneNumber: {
    value: string,
    verified: boolean
  }
  email: string;
  password: string;
  code: string;
  time: Date
}

export default async function sendSignupMail(data: SendSignupMailBody) {
  await LoginInstance.post<BackendMessage>(api.signup, data);
}