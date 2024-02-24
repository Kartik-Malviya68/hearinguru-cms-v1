type GenderOptions = 'male' | 'female' | 'none' | 'prefer not to say';

interface UserData {
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
type ResolverFN = () => Promise<UserData | null>;
interface AuthContextData {
  state: AuthContextState;
}
interface AuthContextState {
  userData: UserData | null;
  loading: {
    checkIsLoggedIn: AsyncState
  }
}
interface AuthProviderFactoryConfig {
  resolver: ResolverFN;
  failureRedirect: string;
}