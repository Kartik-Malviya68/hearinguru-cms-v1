import { useState } from "react";

// Create a custom hook to manage the selected item state
export const useSelectable = (initialItemId: string | null) => {
	const [selectedItemId, setSelectedItemId] = useState<string | null>(
		initialItemId
	);

	const selectItem = (itemId: string) => {
		setSelectedItemId(itemId);
	};

	return {
		selectedItemId,
		selectItem,
	};
};
