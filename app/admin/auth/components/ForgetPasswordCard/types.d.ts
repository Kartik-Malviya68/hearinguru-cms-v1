/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Forgetpassword {
    interface ForgetPassWordForm {
        email: string;
    }
    interface State {
        loading: Record<string, AsyncState>;
    }
}