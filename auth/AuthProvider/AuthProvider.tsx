"use client";
import React, { useContext, useEffect, useState } from "react";
import ServerActions from "./actions/serverActions";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";
import { useRouter } from "next/navigation";

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);
export const useAuthContext = () => useContext(AuthContext);

function authProviderFactory({
	resolver,
	failureRedirect,
}: AuthProviderFactoryConfig) {
	function AuthProvider(props: { children: React.ReactNode }) {
		//* router
		const router = useRouter();

		//* state
		const [state, setState] = useState<AuthContextState>({
			userData: null,
			loading: {
				checkIsLoggedIn: AsyncStateFactory(),
			},
		});

		//* actions
		const serverActions = new ServerActions(state, setState, resolver);

		//* effects
		useEffect(() => {
			serverActions.isLoggedIn();
		}, []);

		//* tsx
		return (
			<AuthContext.Provider value={{ state }}>
				{props.children}
			</AuthContext.Provider>
		);
	}

	return AuthProvider;
}

export default authProviderFactory;
