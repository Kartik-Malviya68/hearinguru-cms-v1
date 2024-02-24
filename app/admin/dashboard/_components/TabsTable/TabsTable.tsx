import { Datepicker, Dropdown, Pagination } from "flowbite-react";
import React, { useState } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import ConsultanciesTable from "../ConsultanciesTable/ConsultanciesTable";

function TabsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          <button className="p-3 flex items-center text-blue-500 text-sm font-medium leading-150 rounded bg-[#e4efff] gap-[10px]">
            Pending
            <IoInformationCircleSharp />
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Not Converted
            <IoInformationCircleSharp />
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Converted
            <IoInformationCircleSharp />
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
      <div className="bg-white shadow w-full flex flex-col rounded-lg">
        <div className="w-full flex p-4 items-center justify-between">
          <Datepicker color={"blue"} />
          <div className="relative w-[350px] mb-6">
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
        </div>
        <ConsultanciesTable />
        <div className="w-full border-t p-4 justify-between flex items-center">
          <h4 className="text-sm font-normal text-gray-500">
            Showing <span className="font-semibold text-gray-900">1-10</span> of{" "}
            <span className="font-semibold text-gray-900">1000</span>
          </h4>
          <Pagination
            color="blue"
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </>
  );
}

export default TabsTable;
