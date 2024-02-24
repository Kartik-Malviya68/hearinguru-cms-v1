"use client";

import EmptyState from "@/public/icons/Modals/EmptyState.svg";
import done from "@/public/icons/Modals/Done.svg";
import React, { useState } from "react";

import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import { SubmitHandler, useForm } from "react-hook-form";

import OTPCountDown from "@/components/OTPCountDown/OTPCountDown";
import { useRouter } from "next/navigation";
import { SessionKeys } from "@/configuration";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import { ModalUtils } from "@/modules/StateManagement/Core/StateUtils";
import { ServerActions } from "./_actions/serverActions";
import OptionalRender from "@/components/utilities/OptionalRender/OptionalRender";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import Modals from "@/components/Modals/CommonModals/Modals";
import { Button } from "flowbite-react";

function page() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<OTP.OTPForm>({});
	const [showModal, setShowModal] = React.useState(false);
	const isClient = typeof window !== "undefined";

	const [state, setState] = useState<OTP.State>({
		modals: {
			verifyAndChange: {
				show: false,
			},
		},
		loading: {
			changePassword: AsyncStateFactory(),
		},
	});

	const serverActions = new ServerActions(state, setState);
	const changePasswordModalActions = new ModalUtils(
		"verifyAndChange",
		state,
		setState
	);

	const sendOtp = (otp: string) => {
		if (isClient) {
			const password = sessionStorage.getItem(
				SessionKeys.forgetPassword.NEW_PASSWORD
			);
			const email = sessionStorage.getItem(
				SessionKeys.forgetPassword.FORGET_PASSWORD_EMAIL
			);

			if (!password || !email) {
				router.push("/auth");
				return;
			}

			serverActions.resetPassword(email, password, otp);
		}
	};

	const onSubmitOTP: SubmitHandler<OTP.OTPForm> = (data) => {
		sendOtp(data.otp);
	};

	const router = useRouter();
	const formattedTime = OTPCountDown();

	return (
		<React.Fragment>
			<NavigationBar name="Forgot Password" />
			<div className="m-auto max-w-[1180px] flex flex-col justify-center items-center w-full">
				<div className="flex items-start flex-col">
					<form
						onSubmit={handleSubmit(onSubmitOTP)}
						className="flex max-w-[375px] h-[324px] p-8 items-center md:p-6 flex-col justify-center gap-5"
					>
						<div className="flex flex-col items-center gap-2">
							<h5 className="text-xl font-bold text-[#1f2024] text-center">
								Enter confirmation code
							</h5>
							<p className="text-center text-sm font-normal text-[#71727a]">
								A 4-digit code was sent to lucasscott3@email.com
							</p>
							<div className="w-full mt-3">
								<input
									{...register("otp", {
										required: {
											value: true,
											message: "otp is required",
										},
									})}
									className="bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Enter OTP"
								/>
								<p className="text-sm text-red-500">{errors.otp?.message}</p>
							</div>
						</div>

						<h5 className="font-normal text-sm text-center text-gray-500">
							Resend code in
							<span className="font-semibold text-black">
								{" "}
								{formattedTime.formattedTime}
							</span>
						</h5>
						<button
							onClick={() => formattedTime.setSeconds(30)}
							className={`${
								formattedTime.seconds === 0
									? "light-blue-btn"
									: "light-blue-btn-disable"
							}`}
						>
							Resend code
						</button>


						<Button 
						onClick={() => {
							setShowModal(true);
						}}
						size='lg' fullSized color='CTA'   >

						<LoadingWrapper
								loading={AsyncUtils.isLoading(state.loading.changePassword)}
							>
								Continue
							</LoadingWrapper>
						</Button>
						
					</form>
				</div>
			</div>

			<OptionalRender
				gateElementList={[
					{
						gate:
							state.modals.verifyAndChange.show &&
							AsyncUtils.isSuccessful(state.loading.changePassword),
						element: (
							<Modals
								icon={done}
								heading="Password Changed!"
								closeIcon={false}
								blueBtnClick={() => router.push("/auth")}
								blueBtn
								blueBtnText="Back to login"
								about="Your password has been changed succesfully"
								openModal={changePasswordModalActions.isVisible()}
								onCloseModal={() => {
									router.push("/auth");
								}}
							/>
						),
					},
					{
						gate:
							state.modals.verifyAndChange.show &&
							AsyncUtils.hasFailed(state.loading.changePassword),
						element: (
							<Modals
								icon={EmptyState}
								heading="Failed to change Password!"
								closeIcon={true}
								blueBtnClick={() => {
									changePasswordModalActions.hideModal();
								}}
								blueBtn
								blueBtnText="Back to login"
								about={state.loading.changePassword.message}
								openModal={changePasswordModalActions.isVisible()}
								onCloseModal={() => {
									changePasswordModalActions.hideModal();
								}}
							/>
						),
					},
				]}
			/>
		</React.Fragment>
	);
}

export default page;
