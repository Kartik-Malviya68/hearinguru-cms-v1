"use client";
import isLoggedInService from "../Fetch/isLoggedIn/isLoggedInService";
import authProviderFactory from "./AuthProvider";

const ConfigedAuthProvider = authProviderFactory({
	resolver: isLoggedInService,
	failureRedirect: "/unauth",
});

export { ConfigedAuthProvider as AuthProvider  };
