import { DataConstants } from "@/configurations/constants/DataConstants";
import { Tab, Tabs } from "@mui/material";
import { Button } from "flowbite-react";
import React from "react";
import { HiAdjustments } from "react-icons/hi";
import { useAdminConsultancy } from "../../../../context/PageContext";

function FilterRow() {
	const { tab } = useAdminConsultancy();

	//* handlers
	const setTabHandler = (event: React.SyntheticEvent, newValue: number) => {
		tab.setCurrentTab(newValue);
	};

	return (
		<div className="flex justify-between">
			<div>
				<Tabs value={tab.currentTab} onChange={setTabHandler}>
					{DataConstants.adminConsultancyTableTabs.map((v, i) => (
						<Tab sx={{ textTransform: "none" }} label={v} key={i} />
					))}
				</Tabs>
			</div>
			<div>
				<Button color="blue">
					<HiAdjustments className="w-5 h-5" />
					Filter
				</Button>
			</div>
		</div>
	);
}

export default FilterRow;
