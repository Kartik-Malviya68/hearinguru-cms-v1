import { Dropdown } from "flowbite-react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import CallingTeamTable from "../Tables/CallingTeamTable/CallingTeamTable";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import AdminsTable from "../Tables/AdminsTable/AdminsTable";
import ClinicsTable from "../Tables/ClinicsTable/ClinicsTable";
import DoctorsTable from "../Tables/DoctorsTable/DoctorsTable";
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
        <Dropdown arrowIcon color="blue" className="" itemScope label="Filter">
          <Dropdown.Item>
            <div className="flex items-center">
              <input
                id="all"
                type="checkbox"
                defaultValue=""
                name="filter"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="all"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All
              </label>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center">
              <input
                id="Appointment"
                name="filter"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="Appointment"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Appointment
              </label>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center">
              <input
                id="Warranty-Exchange"
                type="checkbox"
                name="filter"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="Warranty-Exchange"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Warranty & Exchange
              </label>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center">
              <input
                id="RepairMaintenance"
                type="checkbox"
                name="filter"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="RepairMaintenance"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Repair & Maintenance
              </label>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="bg-white  w-full flex flex-col rounded-lg">
        <div className="w-full flex py-4 items-center justify-between">
          <div className="relative w-[350px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <IoIosSearch />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ID, Type, Name, Number..."
            />
          </div>

          <Dropdown color="Dropdown" className="" label="View All">
            <Dropdown.Item>Analytics</Dropdown.Item>
            <Dropdown.Item>Tommorow</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      {tab === "AdminsTable" && <AdminsTable />}
      {tab === "ClinicsTable" && <ClinicsTable />}
      {tab === "DoctorsTable" && <DoctorsTable />}
      {tab === "CallingTeamTable" && <CallingTeamTable />}
    </div>
  );
}

export default UserSettingTable;
