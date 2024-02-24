/* eslint-disable @typescript-eslint/no-unused-vars */
namespace OTP {
    interface OTPForm {
        otp: string;
    }
    interface State {
        modals: {
            verifyAndChange: {
                show: boolean
            }
        }
        loading: Record<string, AsyncState>;
    }
}