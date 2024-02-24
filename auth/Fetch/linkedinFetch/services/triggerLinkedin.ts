import { apis } from "../api";
import { LinkedinInstance } from "../instance";

export default async function triggerLinkedin(code: string) {
  await LinkedinInstance.get(apis.callback(code), { withCredentials: true });
}