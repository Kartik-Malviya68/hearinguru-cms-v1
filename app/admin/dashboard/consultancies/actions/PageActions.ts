import StateUtils from "@/modules/StateManagement/Core/StateUtils";

export default class PageActions extends StateUtils<AdminConsultancyDashboard.State> {
	setCurrentTab(tabId: number) {
		this.mutateState((v) => {
			v.selectedTab = tabId;
		});
	}
}
