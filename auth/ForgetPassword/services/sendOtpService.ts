import { api } from "../api";
import { ForgetPasswordInstance } from "../instance";

export default async function sendOtpService(email: string) {
  await ForgetPasswordInstance.post(api.sendOtp, { email });
  return true;
}
