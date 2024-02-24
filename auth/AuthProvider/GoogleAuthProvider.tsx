"use client";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface Props {
	children?: React.ReactNode;
}

function GoogleAuthProvider({ children }: Props) {
	return (
		<GoogleOAuthProvider clientId="1025833052334-b7qddh03shqtcv8f7db6qo9ro6o9khh1.apps.googleusercontent.com">
			{children}
		</GoogleOAuthProvider>
	);
}

export default GoogleAuthProvider;
