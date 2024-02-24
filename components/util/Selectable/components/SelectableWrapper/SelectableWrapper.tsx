import useSelectableContext from "../../context/SelectableContext/SelectableContext";
import { SelectableContextProps } from "../../interfaces";

export const SelectableWrapper: React.FC<{
	children: (props: SelectableContextProps) => React.ReactNode;
}> = ({ children }) => {
	const { selectedItemId, selectItem } = useSelectableContext();

	return <>{children({ selectedItemId, selectItem })}</>;
};
