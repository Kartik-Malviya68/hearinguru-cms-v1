import React from "react";
import CorrectionhistoryTable from "../Tables/CorrectionhistoryTable/CorrectionhistoryTable";
import GeneralInformationTable from "../Tables/GeneralInformationTable/GeneralInformationTable";
import LoginHistoryTable from "../Tables/LoginHistoryTable/LoginHistoryTable";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";

function TabsTable() {
  const [{ tab }, actions] = useStamina({
    initialState: {
      tab: "GeneralInformation",
    },
    actions: {
      setGeneralInformation(v) {
        v.tab = "GeneralInformation";
      },
      setCorrectionHistory(v) {
        v.tab = "CorrectionHistory";
      },
      setLoginHistory(v) {
        v.tab = "LoginHistory";
      },
    },
  });

  return (
    <div className="flex flex-col gap-[39px]">
      <div className="flex items-center">
        <button
          onClick={actions.setGeneralInformation}
          className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
            tab === "GeneralInformation"
              ? "bg-[#E7EFFF] text-blue-500 "
              : "text-gray-600"
          }  gap-[10px]`}
        >
          General Information
        </button>
        <button
          onClick={actions.setCorrectionHistory}
          className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
            tab === "CorrectionHistory"
              ? "bg-[#E7EFFF] text-blue-500 "
              : "text-gray-600"
          }  gap-[10px]`}
        >
          Correction History
        </button>
        <button
          onClick={actions.setLoginHistory}
          className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
            tab === "LoginHistory"
              ? "bg-[#E7EFFF] text-blue-500 "
              : "text-gray-600"
          }  gap-[10px]`}
        >
          Login History
        </button>
      </div>

      {tab === "GeneralInformation" && <GeneralInformationTable />}
      {tab === "CorrectionHistory" && <CorrectionhistoryTable />}
      {tab === "LoginHistory" && <LoginHistoryTable />}
    </div>
  );
}

export default TabsTable;
