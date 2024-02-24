namespace AdminConsultancyDashboard {
	interface ContextProps {
		tab: {
			currentTab: number;
			setCurrentTab: (tabIndex: number) => void;
		};
	}

	interface State {
		selectedTab: number;
	}
}
