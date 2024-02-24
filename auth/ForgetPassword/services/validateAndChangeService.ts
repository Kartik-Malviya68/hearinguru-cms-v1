import { api } from "../api";
import { ForgetPasswordInstance } from "../instance";

export default async function validateAndChangeService(email: string, otp: string, newPassword: string) {
  await ForgetPasswordInstance.post(api.validateAndChange, { email, otp, newPassword });
  return true;
}
