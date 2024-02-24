import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";
import { FormFields, State } from "../RegistrationCard";
import defaultSignup from "@/auth/Fetch/defaultFetch/services/defaultSignup";
import { Country } from "country-list-with-dial-code-and-flag";
import triggerLinkedin from "@/auth/Fetch/linkedinFetch/services/triggerLinkedin";

export default class ServerActions extends ServerStateUtils<State> {
  setSelectedCountry(country: Country) {
    this.mutateState(v => {
      v.selectedCountry = country;
    })
  }

  showPassword(status: boolean) {
    this.mutateState(v => {
      v.showPassword = status;
    })
  }

  async submitSignup({ firstName, lastName, password, email, phoneNumber, country }: FormFields & { country: Country }) {
    await this.handleAsync('submitForm', () => defaultSignup({
      firstName,
      lastName,
      password,
      email,
      phoneNumber: {
        value: phoneNumber,
        countryCode: country.code,
        prefix: country.dial_code
      }
    }), {
      errMessage: (err) => {
        return err.response?.data.message || 'Failed to send email';
      }
    });
  }

  async signupWithLinkedin(code: string) {
    this.handleAsync('linkedinLogin', async () => triggerLinkedin(code))
  }


}