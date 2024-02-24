// import { useSettingsContext } from "@/app/(root)/settings/_context/PageContext";
import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import OptionalRender from "@/components/utilities/OptionalRender/OptionalRender";
import ToastIconWrapper from "@/components/utilities/ToastIconWrapper/ToastIconWrapper";
import ToastWrapper from "@/components/utilities/ToastWrapper/ToastWrapper";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Label, Toast } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";
import * as yup from "yup";
const schema = yup
	.object({
		oldPassword: yup
			.string()
			.required("Required")
			.min(8, "Password must be at least 8 characters"),
		newPassword: yup
			.string()
			.required("Required")
			.min(8, "Password must be at least 8 characters"),
		confirmPassword: yup
			.string()
			.required("Required")
			.oneOf([yup.ref("newPassword")], "Passwords must match"),
	})
	.required();
function ResetPasswardCard() {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	getValues,
	// 	formState: { errors },
	// } = useForm<SettingsContext.ResetPassWordForm>({
	// 	resolver: yupResolver(schema),
	// });

	// const { state, serverActions } = useSettingsContext();
	const [showPassword, setShowPassword] = useState(false);
	const [showToast, setShowToast] = useState(false);

	// const forgetPassWordSubmit: SubmitHandler<
	// 	SettingsContext.ResetPassWordForm
	// > = (data) => {
	// 	serverActions.resetPassword(data.oldPassword, data.confirmPassword, () => {
	// 		setShowToast(true);
	// 	});
	// };

	// console.log("toast value is ", showToast);

	return (
		<div className="w-full p-4 bg-white border-b border-t border-gray-200  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form
				// onSubmit={handleSubmit(forgetPassWordSubmit)}
				className="space-y-6"
				action="#"
			>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">
					Reset your Password
				</h5>
				<div>
					<label
						htmlFor="nPassword"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Old Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						// {...register("oldPassword")}
						id="nPassword"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Must be min 8 characters"
					/>
					{/* <p className="text-red-600 text-sm">{errors.oldPassword?.message}</p> */}
				</div>
				<div>
					<label
						htmlFor="nPassword"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						New Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						// {...register("newPassword")}
						id="nPassword"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Must be min 8 characters"
					/>
					{/* <p className="text-red-600 text-sm">{errors.newPassword?.message}</p> */}
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Reconfirm New Password
					</label>

					<input
						type={showPassword ? "text" : "password"}
						// {...register("confirmPassword", {
						// 	validate: (value) =>
						// 		value === getValues("newPassword") ||
						// 		"The passwords do not match",
						// })}
						id="password"
						placeholder="Repeat new password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					/>
					{/* <p className="text-red-600 text-sm">
						{errors.confirmPassword?.message}
					</p> */}
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
					className="w-full relative text-white bg-CTA hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-CTA dark:focus:ring-blue-800"
					>
					Change Password
					{/* <LoadingWrapper
						loading={AsyncUtils.isLoading(state.loading.resetPassword)}
					>
					</LoadingWrapper> */}
				</button>
			</form>
			{/* <OptionalRender
				gateElementList={[
					{
						gate:
							showToast && AsyncUtils.hasFailed(state.loading.resetPassword),
						element: (
							<ToastWrapper show>
								<Toast>
									<div className="flex space-x-2">
										<ToastIconWrapper color="red">
											<IoIosWarning />
										</ToastIconWrapper>
										<p>{state.loading.resetPassword.message}</p>
									</div>
								</Toast>
							</ToastWrapper>
						),
					},
					{
						gate:
							showToast && AsyncUtils.isSuccessful(state.loading.resetPassword),
						element: (
							<ToastWrapper show>
								<Toast>
									<div className="flex space-x-2 items-center">
										<ToastIconWrapper color="green">
											<IoIosCheckmarkCircle />
										</ToastIconWrapper>
										<p>{state.loading.resetPassword.message}</p>
									</div>
								</Toast>
							</ToastWrapper>
						),
					},
				]}
			/> */}
		</div>
	);
}

export default ResetPasswardCard;
