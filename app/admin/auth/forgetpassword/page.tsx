import React from "react";


import PageContextProvider from "./_context/ForgetPasswordContext";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ForgetPasswordCard from "../components/ForgetPasswordCard/ForgetPasswordCard";

function forgetpassword() {
	return (
		<PageContextProvider>
			<React.Fragment>
				<NavigationBar name="Forgot Password" />
				<div className="md:p-8 gap-14 m-auto flex-col lg:flex-row max-w-[1180px] w-full flex justify-center items-center">
					<ForgetPasswordCard />
				</div>
			</React.Fragment>
		</PageContextProvider>
	);
}

export default forgetpassword;
