import { api } from "../api";
import { ResetPasswordInstance } from "../instance";

export async function resetPasswordService(oldPassword: string, newPassword: string) {
  await ResetPasswordInstance.post(api.reset, { oldPassword, newPassword }, { withCredentials: true })
  return true;
}