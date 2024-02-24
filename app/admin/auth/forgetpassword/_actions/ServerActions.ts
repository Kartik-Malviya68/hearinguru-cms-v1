import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import { config } from "../_configuration/config";
import sendOtpService from "@/auth/ForgetPassword/services/sendOtpService";

export class ServerActions extends ServerStateUtils<ForgetPasswordContext.State> {
  async sendOtp(email: string, onSuccess: () => void) {
    const res = await this.handleAsync(config.loadingNames.sendOtp, () => sendOtpService(email), {
      onSuccess: () => {
        onSuccess();
      },
      onError: () => {
        this.mutateState(v => {
          v.modals.sendOtpModal.show = true;
        })
      },
      errMessage: 'please try again'
    });
  }
}