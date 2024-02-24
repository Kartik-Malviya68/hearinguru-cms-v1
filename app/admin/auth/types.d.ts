namespace LoginScreen {
  interface EmailForm {
    email: string;
    password: string;
    rememberMe: boolean;
  }
  interface State {
    loading: Record<string, AsyncState>;
}
}