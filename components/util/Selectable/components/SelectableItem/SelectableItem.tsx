import React from "react";
import useSelectableContext from "../../context/SelectableContext/SelectableContext";

interface SelectableItemProps {
	id: string;
	children:
		| React.ReactNode
		| ((isActive: boolean, selectedId: string) => React.ReactNode);
}

const SelectableItem: React.FC<
	SelectableItemProps & Omit<React.HTMLAttributes<HTMLDivElement>, "children">
> = ({ id, children, ...rest }) => {
	const { selectItem, selectedItemId } = useSelectableContext();
	const isActive = selectedItemId === id;

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		selectItem(id);
		rest.onClick && rest.onClick(e);
	};

	return (
		<div {...rest} onClick={handleClick}>
			{typeof children === "function"
				? (children as Function)(isActive, id)
				: children}
		</div>
	);
};

export default SelectableItem;
