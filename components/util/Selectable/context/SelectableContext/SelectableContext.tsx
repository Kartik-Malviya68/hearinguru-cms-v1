import React, { createContext, useContext, useState } from "react";
import { SelectableContextProps } from "../../interfaces";

export const SelectableContext = createContext<SelectableContextProps>(
	{} as SelectableContextProps
);

// Create a hook to access the context
const useSelectableContext = () => {
	const context = useContext(SelectableContext);

	if (!context) {
		throw new Error(
			"useSelectableContext must be used within a SelectableProvider"
		);
	}

	return context;
};

export default useSelectableContext;
