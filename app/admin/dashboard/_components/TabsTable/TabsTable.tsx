import { Pagination, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { DateRangePicker, Stack } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import ConsultanciesTable from "../ConsultanciesTable/ConsultanciesTable";
import { consultanciesTable } from "../ConsultanciesTable/data";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { columns } from "./columns";
function TabsTable() {
  const [columnFilters, setColumnFilters] = useState([
    { id: "status", value: "" },
  ]);
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data: consultanciesTable,
    columns,
    state: {
      columnFilters,
      rowSelection,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 6,
      },
    },
  });
  const onPageChange = (page: number) => {
    table.setState((old) => {
      return {
        ...old,
        pagination: {
          ...old.pagination,
          pageIndex: page - 1,
        },
      };
    });
  };

  const tabsNames = [
    { id: "all", value: "" },
    { id: "Pending", value: "Pending" },
    { id: "Not Converted", value: "Not Converted" },
    { id: "Converted", value: "Converted" },
  ];

  return (
    <>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          {tabsNames.map((name) => (
            <button
              onClick={() =>
                setColumnFilters([{ id: "status", value: name.value }])
              }
              className={`p-3 flex items-center duration-100   ${
                columnFilters[0].value === name.value
                  ? "bg-[#e4efff] text-blue-500"
                  : "bg-white text-gray-500 hover:text-gray-800"
              } text-sm font-medium leading-150 rounded gap-[10px]`}
            >
              {name.id === "all" ? "All" : name.id}
              <Tooltip content={name.id}>
                <IoInformationCircleSharp />
              </Tooltip>
            </button>
          ))}
        </div>

        <FilterDropDown
          table={table}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          buttonName="Filter"
        />
      </div>
      <div className="bg-white shadow w-full flex flex-col rounded-lg">
        <div className="w-full flex p-4 items-center justify-between">
          <DateRangePicker />
          <div className="relative w-[350px] mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <IoIosSearch />
            </div>
            <input
              type="text"
              onChange={(e) => {
                table.setGlobalFilter(e.target.value);
              }}
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ID, Type, Name, Number..."
            />
          </div>
        </div>
        <ConsultanciesTable flexRender={flexRender} table={table} />
        <div className="w-full border-t p-4 justify-between flex items-center">
          <h4 className="text-sm font-normal text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {table.getState().pagination.pageIndex + 1}-{table.getRowCount()}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {table.getRowCount()}
            </span>
          </h4>
          <Pagination
            color="blue"
            currentPage={table.getState().pagination.pageIndex + 1}
            totalPages={table.getPageCount()}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </>
  );
}

export default TabsTable;
