/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import NavigationBar from "@/app/admin/auth/components/NavigationBar/NavigationBar";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import { ToggleClass } from "@/modules/ClassNameUtils/conditionalClasses";
import { Button } from "flowbite-react";
import { useRouter } from "next/router";



import React from "react";

function page() {
    // const router = useRouter();
  return (
    <React.Fragment>
      <NavigationBar name="Register"  />
      <div className="m-auto gap-14 max-w-[1180px] flex justify-center items-center w-full">
        <div className="p-[10px] gap-14 w-full flex justify-center items-center">
          <div className="flex max-w-[1180px] items-start justify-between">
            <div className="h-[427px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-start gap-6 w-full">
                <HearinguruAdminLogo className="scale-150 origin-left" />
                <h6 className="text-gray-900 font-extrabold text-6xl">
                  Fill Details
                </h6>
                <p className="text-base font-normal">
                  View and manage all of your hearinguru accounts from one
                  dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full mt-8 sm:rounded-lg flex-col bg-white border sm:shadow border-transparent sm:border-gray-200 flex items-center justify-center gap-5 max-w-xl">
            <div className="w-full px-3.5 py-4 sm:p-6 md:p-8 mx-auto">
              <form
                className="space-y-6"
                action="#"
                // onSubmit={handleSubmit(submitHandler)}
              >
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                  Register
                </h5>
                <div>
                  <label
                    htmlFor="Gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="Gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="not prefer to say">not prefer to say</option>
                    <option value="none">none</option>
                  </select>
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.firstName?.message} */}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="Role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="Role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Calling Team">Calling Team</option>
                  </select>
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.firstName?.message} */}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    // {...register("email")}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter here"
                  />
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.email?.message} */}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="Pincode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    // {...register("email")}
                    id="Pincode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter here"
                  />
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.email?.message} */}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="City"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    // {...register("email")}
                    id="City"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter here"
                  />
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.email?.message} */}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="State"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    // {...register("email")}
                    id="State"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter here"
                  />
                  <p className="text-red-600 text-sm mt-2">
                    {/* {errors.email?.message} */}
                  </p>
                </div>
                
                <Button type="submit" href="/admin/auth/registration/otp/Verifyid/Filldetails/otp"  color="CTA" size={"md"} fullSized>
                  <LoadingWrapper
								// loading={
								// 	AsyncUtils.isLoading(state.loading.submitForm) ||
								// 	AsyncUtils.isLoading(state.loading.linkedinLogin)
								// }
							>
                  Continue
                  </LoadingWrapper>
                </Button>
                
                {/* <div className="flex flex-col items-center gap-y-4 justify-center w-full">
							<p className="text-xs font-light text-center text-[#71727a]">
								Or continue with
							</p>
							<SocialMediaBtnSection
								// onCodeLinkedin={function (code: string): void {
								// 	serverActions.signupWithLinkedin(code);
								// }}
							/>
						</div> */}
              </form>
            </div>
          </div>
          {/* <ToastWrapper show={AsyncUtils.isSuccessful(state.loading.submitForm)}>
				<Toast>
					<div className="flex items-center space-x-4">
						<ToastIconWrapper color="green">
							<IoMdMail />
						</ToastIconWrapper>

						<span>Email verification mail has been sent!</span>
						<Toast.Toggle />
					</div>
				</Toast>
			</ToastWrapper>
			<ToastWrapper show={AsyncUtils.hasFailed(state.loading.submitForm)}>
				<Toast>
					<div className="space-x-4 flex items-center">
						<ToastIconWrapper color="red">
							<MdError />
						</ToastIconWrapper>

						<div>{state.loading.submitForm.message}</div>
						<Toast.Toggle />
					</div>
				</Toast>
			</ToastWrapper>

			<OptionalRender
				gateElementList={[
					{
						gate: AsyncUtils.isSuccessful(state.loading.linkedinLogin),
						element: (
							<ToastWrapper show>
								<Toast>
									<div className="flex items-center space-x-4">
										<ToastIconWrapper color="green">
											<IoMdCheckmarkCircleOutline />
										</ToastIconWrapper>
										<span>Successfully signed up!</span>
										<Toast.Toggle />
									</div>
								</Toast>
							</ToastWrapper>
						),
					},
					{
						gate: AsyncUtils.hasFailed(state.loading.linkedinLogin),
						element: (
							<ToastWrapper show>
								<Toast>
									<div className="flex items-center space-x-4">
										<ToastIconWrapper color="red">
											<MdError />
										</ToastIconWrapper>
										<span>Failed to sign up!</span>
										<Toast.Toggle />
									</div>
								</Toast>
							</ToastWrapper>
						),
					},
				]}
			/> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default page;
