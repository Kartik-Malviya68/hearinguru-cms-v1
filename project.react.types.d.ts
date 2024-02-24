import * as React from "react";

// Extend the React namespace
declare module "react" {
	// Add your own types or interfaces
	type FCC<P = {}> = FunctionComponent<P & { children?: React.ReactNode }>;
}
