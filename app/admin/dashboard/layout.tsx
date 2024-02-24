"use client";

import NavSidebar from "@/components/Layout/NavSidebar/NavSidebar";
import NavigationBar from "@/components/Layout/NavigationBar/NavigationBar";

import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<section className="flex relative items-start w-full h-screen overflow-auto">
				<aside className="sticky h-screen ">
					<NavSidebar />
				</aside>
				<main className="flex grow flex-col w-full h-full overflow-x-hidden relative">
					<div className="sticky z-50 top-0">
						<NavigationBar />
					</div>
					{children}
				</main>
			</section>
		</>
	);
}
