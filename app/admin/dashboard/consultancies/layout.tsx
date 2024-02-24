"use client";

import React from "react";


import AdminContextProvider from "./context/PageContext";
interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<AdminContextProvider>
			
				
				{children}

		</AdminContextProvider>
	);
}

// className="bg-white text-gray-800 rounded-lg border border-gray-200 "
