import React from "react";

import PageContextProvider from "./_context/ResetPassword";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ResetPasswordCard from "../../components/ResetPasswordCard/ResetPasswordCard";

export default function page() {
	return (
		<PageContextProvider>
			<NavigationBar name="Forgot Password" />
			<div className="md:p-8 gap-14 m-auto flex-col lg:flex-row max-w-[1180px] w-full flex justify-center items-center">
				<ResetPasswordCard />
			</div>
		</PageContextProvider>
	);
}
