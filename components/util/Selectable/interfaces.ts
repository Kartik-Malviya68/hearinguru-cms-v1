// Define a type for your items
export interface SelectableItem {
	id: string;
	name: string;
}

// Create a context to manage the selected item state
export interface SelectableContextProps {
	selectedItemId: string | null;
	selectItem: (itemId: string) => void;
}
