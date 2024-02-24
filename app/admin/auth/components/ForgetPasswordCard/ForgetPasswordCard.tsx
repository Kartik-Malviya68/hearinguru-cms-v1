"use client";

import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import { SessionKeys } from "@/configuration";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { useForgetPasswordContextContext } from "../../forgetpassword/_context/ForgetPasswordContext";
import OptionalRender from "@/components/utilities/OptionalRender/OptionalRender";
import { config } from "../../forgetpassword/_configuration/config";
import Modals from "@/components/Modals/CommonModals/Modals";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";


const schema = yup
	.object({
		email: yup.string().email().required(),
	})
	.required();
function ForgetPasswordCard() {
	const isClient = typeof window !== "undefined";

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Forgetpassword.ForgetPassWordForm>({
		defaultValues: {
			email: (() => {
				if (isClient) {
					const retrieve = sessionStorage.getItem(
						SessionKeys.forgetPassword.FORGET_PASSWORD_EMAIL
					);
					return retrieve || "";
				}
				return "";
			})(),
		},
		resolver: yupResolver(schema),
	});

	const router = useRouter();

	const {
		state: pstate,
		serverActions,
		modalUtils,
	} = useForgetPasswordContextContext();

	const forgetPassWordSubmit: SubmitHandler<
		Forgetpassword.ForgetPassWordForm
	> = (data) => {
		//* setting
		if (isClient) {
			sessionStorage.setItem(
				SessionKeys.forgetPassword.FORGET_PASSWORD_EMAIL,
				data.email
			);
		}

		//* navigate
		serverActions.sendOtp(data.email, () => {
			router.push("admin/auth/forgetpassword/resetpassword");
		});
	};
	return (
		<div className="m-auto max-w-[1180px] flex flex-col justify-center items-center w-full">
			<div className="flex items-start p-5 flex-col">
				<form
					onSubmit={handleSubmit(forgetPassWordSubmit)}
					className="flex max-w-[375px] h-[324px] p- md:p-6 flex-col justify-center items-center gap-10"
				>
					<div className="flex flex-col items-center gap-8">
						<HearinguruAdminLogo className="scale-[2]" />
						<div className="flex flex-col items-center gap-3 w-full">
							<h5 className="text-2xl font-bold text-[#1f2024] text-center">
								Forgot Password?
							</h5>
							<p className="text-center text-base font-normal  text-gray-500">
								Don't worry! It happens. Please enter the email associated with
								your account.
							</p>
						</div>

						<div className="w-full">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								id="email"
								{...register("email")}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="name@company.com"
							/>
							<p className="text-red-600 text-sm">{errors.email?.message}</p>
						</div>
					</div>

					<button
						type="submit"
						className="w-full text-white bg-CTA hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-CTA dark:focus:ring-blue-800"
					>
						<LoadingWrapper
							loading={AsyncUtils.isLoading(
								pstate.loading[config.loadingNames.sendOtp]
							)}
						>
							Send One Time Password
						</LoadingWrapper>
					</button>
					<div className="text-sm flex justify-between items-center font-medium text-gray-500 dark:text-gray-300">
						<a
							href="/auth/registration"
							className=" hover:underline dark:text-blue-500"
						>
							Remember Password? <span className="text-CTA">Sign In</span>
						</a>
					</div>
				</form>
			</div>
			{/* //* TODO set the modal over here */}
			<Modals
				heading="Failed to send Otp"
				about={pstate.loading[config.loadingNames.sendOtp].message}
				openModal={
					modalUtils.otp.isVisible() &&
					AsyncUtils.hasFailed(pstate.loading[config.loadingNames.sendOtp])
				}
				onCloseModal={function (): void {
					modalUtils.otp.hideModal();
				}}
				closeIcon
			/>
		</div>
	);
}

export default ForgetPasswordCard;
