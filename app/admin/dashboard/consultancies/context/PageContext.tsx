import React, { useContext, useState } from "react";
import PageActions from "../actions/PageActions";

const PageContext = React.createContext<AdminConsultancyDashboard.ContextProps>(
	{} as AdminConsultancyDashboard.ContextProps
);

//* use functino export
export const useAdminConsultancy = () => useContext(PageContext);

interface Props {
	children?: React.ReactNode;
}
export default function AdminContextProvider({ children }: Props) {
	const [state, setState] = useState<AdminConsultancyDashboard.State>({
		selectedTab: 0,
	});

	const pageActions = new PageActions(state, setState);

	return (
		<PageContext.Provider
			value={{
				tab: {
					currentTab: state.selectedTab,
					setCurrentTab: (id) => {
						pageActions.setCurrentTab(id);
					},
				},
			}}
		>
			{children}
		</PageContext.Provider>
	);
}
