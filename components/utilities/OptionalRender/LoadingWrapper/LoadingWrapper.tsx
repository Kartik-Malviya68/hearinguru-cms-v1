import { Spinner } from "flowbite-react";
import React, { ComponentProps } from "react";
import OptionalRender from "../OptionalRender";

interface Props {
	loading?: boolean;
	loadingComponent?: React.ReactNode;
	children?: React.ReactNode | ((isLoading: boolean) => React.ReactNode);
	loadingProps?: ComponentProps<typeof Spinner>;
}

function LoadingWrapper({
	loading = false,
	loadingComponent,
	children,
	loadingProps = {
		size: "md",
		className: "text-black/20 fill-white",
	},
}: Props) {
	return (
		<OptionalRender
			gateElementList={[
				{
					gate: loading === true,
					element: loadingComponent || (
						<>
							<Spinner {...loadingProps} />
							<span
								className="absolute inset-0 z-100 cursor-not-allowed"
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
								}}
							></span>
						</>
					),
				},
				{
					gate: loading === false,
					element:
						typeof children === "function" ? (
							<>{children(loading)}</>
						) : (
							<>{children}</>
						),
				},
			]}
		/>
	);
}

export default LoadingWrapper;
