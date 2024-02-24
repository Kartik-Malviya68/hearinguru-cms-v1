"use client";
import React, { useState } from "react";
import SocialMediaBtnSection from "../SocialMediaBtnSection/SocialMediaBtnSection";
import { useForm } from "react-hook-form";

import Link from "next/link";
import validationSchema from "./configurations/formValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ServerActions from "./actions/serverActions";
import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import OptionalRender from "@/components/utilities/OptionalRender/OptionalRender";
import ToastWrapper from "@/components/utilities/ToastWrapper/ToastWrapper";
import { Alert, Button, Toast } from "flowbite-react";
import { IoMdMail } from "react-icons/io";
import ToastIconWrapper from "@/components/utilities/ToastIconWrapper/ToastIconWrapper";
import { MdError } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CountryList, { Country } from "country-list-with-dial-code-and-flag";
import { ToggleClass } from "@/modules/ClassNameUtils/conditionalClasses";
import SelectCountryCode from "../SelectCountryCode/SelectCountryCode";
import { useRouter } from "next/navigation";

export interface FormFields {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	password: string;
}

export interface State {
	selectedCountry: Country;
	showPassword: boolean;
	loading: Record<string, AsyncState>;
}

function RegistrationCard() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		getValues,
		trigger,
	} = useForm<FormFields>({
		resolver: yupResolver(validationSchema),
	});
	const [state, setState] = useState<State>({
		selectedCountry: CountryList.getAll()[0],
		showPassword: false,
		loading: {
			submitForm: AsyncStateFactory(),
			linkedinLogin: AsyncStateFactory(),
		},
	});

  const serverActions = new ServerActions(state, setState);
	const submitHandler = (data: FormFields) => {
		serverActions.submitSignup({ ...data, country: state.selectedCountry });
		router.push("/admin/auth/registration/otp");
	};

	return (
		<React.Fragment>
			<div className="w-full mt-8 sm:rounded-lg flex-col bg-white border sm:shadow border-transparent sm:border-gray-200 flex items-center justify-center gap-5 max-w-xl">
				<div className="w-full px-3.5 py-4 sm:p-6 md:p-8 mx-auto">
					<form
						className="space-y-6"
						action="#"
						onSubmit={handleSubmit(submitHandler)}
					>
						<h5 className="text-xl font-bold text-gray-900 dark:text-white">
							Register
						</h5>
						<div>
							<label
								htmlFor="firstName"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								First Name
							</label>
							<input
								type="text"
								{...register("firstName")}
								id="firstName"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Enter here"
							/>
							<p className="text-red-600 text-sm mt-2">
								{errors.firstName?.message}
							</p>
						</div>
						<div>
							<label
								htmlFor="lastName"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Last Name
							</label>
							<input
								type="text"
								{...register("lastName")}
								id="lastName"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Enter here"
							/>
							<p className="text-red-600 text-sm mt-2">
								{errors.lastName?.message}
							</p>
						</div>
						<div>
							<label
								htmlFor="phoneNumber"
								className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Mobile Number
							</label>

							<div className="flex items-stretch">
								<div
									id="dropdown-phone-button"
									className="max-w-[120px] focus:border-slate-300 flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
								>
									<SelectCountryCode
										onChange={(e) => {
											serverActions.setSelectedCountry(e);
										}}
									/>
								</div>
								<div className="relative w-full">
									<input
										type="phone"
										id="phone-input"
										className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
										placeholder="123-456-7890"
										{...register("phoneNumber")}
									/>
								</div>
							</div>
							<p className="text-red-600 text-sm mt-2">
								{errors.phoneNumber?.message}
							</p>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								type="email"
								{...register("email")}
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="name@company.com"
							/>
							<p className="text-red-600 text-sm mt-2">
								{errors.email?.message}
							</p>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your password
							</label>
							<input
								type={new ToggleClass(
									"text",
									"password",
									state.showPassword
								).getClass()}
								{...register("password")}
								id="password"
								placeholder="••••••••"
								className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							/>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										defaultValue=""
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
										onChange={(e) => {
											serverActions.showPassword(e.target.checked);
										}}
									/>
								</div>
								<label
									htmlFor="remember"
									className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Show password
								</label>
							</div>
							<p className="text-red-600 text-sm mt-2">
								{errors.password?.message}
							</p>
						</div>
						<Button
							type="submit"
							color="CTA"
              size={"md"}
              fullSized
						>
							<LoadingWrapper
								loading={
									AsyncUtils.isLoading(state.loading.submitForm) ||
									AsyncUtils.isLoading(state.loading.linkedinLogin)
								}
							>
								Register now
							</LoadingWrapper>
						</Button>
						<div className="text-sm flex justify-center items-center font-medium text-gray-500 dark:text-gray-300">
							<a href="/auth" className=" hover:underline dark:text-blue-500">
								Already have an account? &nbsp;
								<span className="text-CTA">Sign In</span>
							</a>
						</div>
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
			<ToastWrapper show={AsyncUtils.isSuccessful(state.loading.submitForm)}>
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
			/>
		</React.Fragment>
	);
}
export const dynamic = "force-dynamic";
export default RegistrationCard;
