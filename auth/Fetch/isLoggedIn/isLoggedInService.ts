import { api } from "./api";
import { IsLoggedInInstance } from "./instance";

type GenderOptions = 'male' | 'female' | 'none' | 'prefer not to say';
interface Iuser {
  firstName: string;
  lastName: string;
  userCode: string;
  email: string;
  clientCode: string;
  password: string | null;
  phoneNumber: {
    countryCode: string;
    prefix: string;
    value: string;
    verified: boolean;
  };
  gender: GenderOptions;
}

interface IsLoggedInResponse {
  userData: Iuser | null;
}

export default async function isLoggedInService() {
  return (await IsLoggedInInstance.get<IsLoggedInResponse>(api.check, { withCredentials: true })).data.userData;
}