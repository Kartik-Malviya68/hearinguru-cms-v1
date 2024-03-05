import React from "react";

import useStamina from "@/modules/StateManagement/Stamina/useStamina";

import { adminTableDummyData, clinicTableDummyData } from "../Tables/dummydata";
import AdminAndCallingTeamTableColumn from "../Tables/Columns/AdminAndCallingTeamTableColumn";
import { ClinicsAndDoctorsColumn } from "../Tables/Columns/ClinicsAndDoctorsColunm";
import UserSettingTableLayout from "../Tables/UserSettingTableLayout/UserSettingTableLayout";
function UserSettingTable() {
  const [{ tab }, actions] = useStamina({
    initialState: {
      tab: "AdminsTable",
    },
    actions: {
      setAdminsTable(v) {
        v.tab = "AdminsTable";
      },
      setClinicsTable(v) {
        v.tab = "ClinicsTable";
      },
      setDoctorsTable(v) {
        v.tab = "DoctorsTable";
      },
      setCallingTeamTable(v) {
        v.tab = "CallingTeamTable";
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow w-full">
      <div className="w-full flex-col gap-[39px] flex items-center justify-between">
        <div className="gap-6 flex w-full justify-between">
          <h4 className="leading-150 text-2xl font-semibold text-black">
            All Users
          </h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          <button
            onClick={actions.setAdminsTable}
            className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
              tab === "AdminsTable"
                ? "bg-[#E7EFFF] text-blue-500 "
                : "text-gray-600"
            }  gap-[10px]`}
          >
            Admin
          </button>
          <button
            onClick={actions.setClinicsTable}
            className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
              tab === "ClinicsTable"
                ? "bg-[#E7EFFF] text-blue-500 "
                : "text-gray-600"
            }  gap-[10px]`}
          >
            Clinics
          </button>
          <button
            onClick={actions.setDoctorsTable}
            className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
              tab === "DoctorsTable"
                ? "bg-[#E7EFFF] text-blue-500 "
                : "text-gray-600"
            }  gap-[10px]`}
          >
            Doctors
          </button>
          <button
            onClick={actions.setCallingTeamTable}
            className={`p-3 flex items-center text-sm font-medium leading-150 rounded ${
              tab === "CallingTeamTable"
                ? "bg-[#E7EFFF] text-blue-500 "
                : "text-gray-600"
            }  gap-[10px]`}
          >
            Calling Team
          </button>
        </div>
      </div>

      {tab === "AdminsTable" && (
        <UserSettingTableLayout
          data={adminTableDummyData}
          columns={AdminAndCallingTeamTableColumn}
        />
      )}
      {tab === "ClinicsTable" && (
        <UserSettingTableLayout
          data={clinicTableDummyData}
          columns={ClinicsAndDoctorsColumn}
        />
      )}
      {tab === "DoctorsTable" && (
        <UserSettingTableLayout
          data={clinicTableDummyData}
          columns={ClinicsAndDoctorsColumn}
        />
      )}
      {tab === "CallingTeamTable" && (
        <UserSettingTableLayout
          data={adminTableDummyData}
          columns={AdminAndCallingTeamTableColumn}
        />
      )}
    </div>
  );
}

export default UserSettingTable;
