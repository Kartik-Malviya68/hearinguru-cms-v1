export type Mode = 'dev' | 'prod';

interface Configuration {
  mode: Mode;
}
export const configuration: Configuration = {
  mode: 'prod'
}

//* session keys 
export class SessionKeys {
  static readonly forgetPassword = {
    FORGET_PASSWORD_EMAIL: 'FORGET_PASSWORD_EMAIL',
    NEW_PASSWORD: 'NEW_PASSWORD'
  }
}
