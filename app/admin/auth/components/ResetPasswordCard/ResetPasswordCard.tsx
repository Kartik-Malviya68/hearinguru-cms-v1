"use client";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import { SessionKeys } from "@/configuration";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import { Checkbox, Label } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function ResetPasswordCard() {
	const isClient = typeof window !== "undefined";

	const [state, setState] = useState<Forgetpassword.State>({
		loading: {
			setNewPassword: AsyncStateFactory(),
		},
	});
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<Resetpassword.ResetPassWordForm>({
		defaultValues: {
			password: (() => {
				if (isClient) {
					const retrieve = sessionStorage.getItem(
						SessionKeys.forgetPassword.NEW_PASSWORD
					);
					return retrieve || "";
				}
				return "";
			})(),
		},
	});
	const router = useRouter();
	const resetPasswordSubmit: SubmitHandler<Resetpassword.ResetPassWordForm> = (
		data
	) => {
		if (isClient)
			sessionStorage.setItem(
				SessionKeys.forgetPassword.NEW_PASSWORD,
				data.password
			);
		router.push("/auth/forgetpassword/resetpassword/otp");
	};
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="m-auto max-w-[1180px] flex flex-col justify-center items-center w-full">
			<div className="flex items-start p-5 flex-col">
				<div className="flex max-w-[375px] h-[324px] p- md:p-6 flex-col justify-center items-center gap-10">
					<form
						onSubmit={handleSubmit(resetPasswordSubmit)}
						className="flex flex-col items-center gap-8"
					>
						<HearinguruAdminLogo className="scale-[2]" />
						<div className="flex flex-col items-center gap-3 w-full">
							<h5 className="text-2xl font-bold text-[#1f2024] text-center">
								Reset your Password
							</h5>
							<p className="text-center text-base font-normal  text-gray-500">
								Please reset your new password and reconfirm it.
							</p>
						</div>

						<div className="w-full">
							<label
								htmlFor="nPassword"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								New Password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								id="nPassword"
								{...register("password")}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Must be min 8 characters"
							/>
							<p className="text-red-600 text-sm">{errors.password?.message}</p>
						</div>
						<div className="w-full">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Reconfirm New Password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								{...register("confirmPassword", {
									validate: (value) =>
										value === getValues("password") ||
										"The passwords do not match",
								})}
								id="password"
								placeholder="Repeat new password"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							/>
							<p className="text-red-600 text-sm">
								{errors.confirmPassword?.message}
							</p>
							<div className="flex items-center mt-3 gap-2">
								<Checkbox
									onChange={() => setShowPassword(!showPassword)}
									id="promotion"
									color="blue"
								/>
								<Label htmlFor="promotion">Show password</Label>
							</div>
						</div>

						<button
							type="submit"
							className="w-full text-white bg-CTA hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-CTA dark:focus:ring-blue-800"
						>
							<LoadingWrapper
								loading={AsyncUtils.isLoading(state.loading.setNewPassword)}
							>
								Change Password
							</LoadingWrapper>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ResetPasswordCard;
