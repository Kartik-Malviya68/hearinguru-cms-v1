namespace OTP {
    export interface OTPForm {
        otp: string;
    }
    interface State {
        loading: Record<string, AsyncState>;
    }
}