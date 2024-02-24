"use client";
import React, { useContext, useState } from "react";
import { ServerActions } from "../_actions/ServerActions";
import { config } from "../_configuration/config";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import { ModalUtils } from "@/modules/StateManagement/Core/StateUtils";

type ContextType = ForgetPasswordContext.ContextValues & {
	serverActions: ServerActions;
	modalUtils: {
		otp: ModalUtils<ForgetPasswordContext.State>;
	};
};

const ForgetPasswordContextContext = React.createContext<ContextType>(
	{} as ContextType
);

export const useForgetPasswordContextContext = () =>
	useContext(ForgetPasswordContextContext);

interface Props {
	children: React.ReactNode;
}

export default function PageContextProvider({ children }: Props) {
	const [state, setState] = useState<ForgetPasswordContext.State>({
		modals: {
			sendOtpModal: {
				show: false,
			},
		},
		loading: {
			[config.loadingNames.sendOtp]: AsyncStateFactory(),
		},
	});

	const serverActions = new ServerActions(state, setState);
	const otpModal = new ModalUtils<ForgetPasswordContext.State>(
		"sendOtpModal",
		state,
		setState
	);

	return (
		<ForgetPasswordContextContext.Provider
			value={{ state, serverActions, modalUtils: { otp: otpModal } }}
		>
			{children}
		</ForgetPasswordContextContext.Provider>
	);
}
