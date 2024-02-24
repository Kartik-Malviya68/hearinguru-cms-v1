import { apis } from "../api";
import { DefaultLoginInstance } from "../instance";

export default async function activateProfile(email: string, code: string) {
  await DefaultLoginInstance.get(apis.activateAccount({ email, code }));
}