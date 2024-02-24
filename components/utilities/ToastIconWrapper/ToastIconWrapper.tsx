import React from "react";

interface Props {
	color?: string;
	children?: React.ReactNode;
}

function ToastIconWrapper({ color = "cyan", children }: Props) {
	return (
		<div
			className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-${color}-100 text-${color}-500 dark:bg-${color}-800 dark:text-${color}-200`}
		>
			{children}
		</div>
	);
}

export default ToastIconWrapper;
