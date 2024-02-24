export const apis = {
  login: 'user/Login',
  signup: 'user/signup',
  activateAccount: ({ email, code }: { email: string, code: string }) => `activate/${email}/${code}`
}