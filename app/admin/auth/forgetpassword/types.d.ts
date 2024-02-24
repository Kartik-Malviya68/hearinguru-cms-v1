namespace ForgetPasswordContext {
  interface State {
    modals: {
      sendOtpModal: {
        show: boolean;
      }
    }
    loading: Record<string, AsyncState>
  }
  interface ContextValues {
    state: State;
  }
}
