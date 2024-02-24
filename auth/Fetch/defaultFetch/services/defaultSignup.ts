import { apis } from "../api";
import { DefaultLoginInstance } from "../instance";

export interface SignupData {
  firstName: string;
  lastName: string;
  phoneNumber: {
    value: string;
    countryCode: string;
    prefix: string;
  };
  email: string;
  password: string;
}

export interface SignupResponse {
  message: string;
}

export default async function defaultSignup(data: SignupData) {
  return await DefaultLoginInstance.post<SignupResponse>(apis.signup, data, { withCredentials: true });
}