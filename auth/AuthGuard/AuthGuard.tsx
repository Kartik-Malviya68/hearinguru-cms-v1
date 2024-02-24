"use client";

import React, { useEffect, useMemo } from "react";
import { useAuthContext } from "../AuthProvider/AuthProvider";
import AsyncUtils, {
	StateLoadingUtils,
} from "@/modules/StateManagement/AsyncState/AsyncUtils";
import { useRouter } from "next/navigation";
import OptionalRender from "@/components/utilities/OptionalRender/OptionalRender";
import { Spinner } from "flowbite-react";

type UserRoles = "ALL" | "ONLY-AUTH";

export interface AuthGuardConfig {
	allowed: UserRoles[];
	unauthRedirect?: string;
}

interface AuthGuardProps {
	children: React.ReactNode;
	config?: AuthGuardConfig;
}

function AuthGuard({ children, config }: AuthGuardProps) {
	const auth = useAuthContext();
	const loadingUtil = new StateLoadingUtils(auth.state.loading);
	const allowedSet = useMemo(() => {
		if (config === undefined) return undefined;
		const set = new Set<UserRoles>(config.allowed);
		return set;
	}, [config?.allowed]);

	const router = useRouter();
	const unauthRedirect =
		config && config.unauthRedirect ? config.unauthRedirect : "/auth";

	useEffect(() => {
		if (
			loadingUtil.set("checkIsLoggedIn").isLoading() ||
			loadingUtil.set("checkIsLoggedIn").isDormant()
		)
			return;

		if (
			loadingUtil.set("checkIsLoggedIn").hasFailed() ||
			(allowedSet &&
				allowedSet.has("ONLY-AUTH") &&
				auth.state.userData === null)
		) {
			router.replace(unauthRedirect);
		}
	}, [allowedSet, auth.state.userData]);

	return (
		<OptionalRender
			gateElementList={[
				{
					gate:
						loadingUtil.set("checkIsLoggedIn").isLoading() ||
						(allowedSet &&
							allowedSet.has("ONLY-AUTH") &&
							auth.state.userData === null) ||
						false,
					element: (
						<div className="w-screen h-screen flex flex-col justify-center items-center">
							<Spinner size={"xl"} />
						</div>
					),
				},
				{
					gate: true,
					element: <>{children}</>,
				},
			]}
		/>
	);
}

export default AuthGuard;
