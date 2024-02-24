import { useSelectable } from "../../../hooks/useSelectable";
import { SelectableContext } from "../SelectableContext";

const SelectableProvider: React.FCC<{
	initialItemId: string | null;
}> = ({ initialItemId, children }) => {
	const value = useSelectable(initialItemId);
	return (
		<SelectableContext.Provider value={value}>
			{children}
		</SelectableContext.Provider>
	);
};

export default SelectableProvider;
