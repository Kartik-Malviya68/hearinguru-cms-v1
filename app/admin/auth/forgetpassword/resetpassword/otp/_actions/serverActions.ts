import validateAndChangeService from "@/auth/ForgetPassword/services/validateAndChangeService";
import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";

export class ServerActions extends ServerStateUtils<OTP.State> {
  async resetPassword(email: string, password: string, otp: string) {
    await this.handleAsync('changePassword', () => validateAndChangeService(email, otp, password), {
      onEnd: () => {
        this.mutateState(v => {
          v.modals.verifyAndChange.show = true;
        })
      },
      errMessage: (err) => {
        return err.response?.data.message || 'Please try again, some problem has occurred.'
      }
    })
  }
}
