"use client";
import React, { useContext, useState } from "react";

const ResetPasswordContext = React.createContext<ResetPassword.ContextValues>(
	{} as ResetPassword.ContextValues
);

export const useResetPasswordContext = () => useContext(ResetPasswordContext);

interface Props {
	children: React.ReactNode;
}

export default function PageContextProvider({ children }: Props) {
	const [state, setState] = useState<ResetPassword.State>({
		loading: {},
	});

	

	return (
		<ResetPasswordContext.Provider value={{}}>
			{children}
		</ResetPasswordContext.Provider>
	);
}
