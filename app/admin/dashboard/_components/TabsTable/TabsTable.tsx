import { Badge, Datepicker, Dropdown, Pagination } from "flowbite-react";
import React, { useState } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { DateRangePicker, Stack } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import {
  useReactTable,
  createColumnHelper,
  ColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import ConsultanciesTable from "../ConsultanciesTable/ConsultanciesTable";
import { consultanciesTable } from "../ConsultanciesTable/data";
import FilterDropDown from "../FilterDropDown/FilterDropDown";

function TabsTable() {
  const columnHelper =
    createColumnHelper<ConsultanciesTableTypes.ConsultanciesTable>();
  const [columnFilters, setColumnFilters] = useState([]);
  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateAndTime", {
      header: () => "DATE & TIME",
      cell: (info) => info.getValue().toLocaleString("en-US"),
    }),
    columnHelper.accessor("phoneNumber", {
      header: () => "Phone Number",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("consultancyType", {
      header: () => "Consultancy Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("slot", {
      header: () => "Slot",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <Badge
          style={{ width: "fit-content" }}
          color={
            { Pending: "purple", "Not Converted": "gray", Converted: "green" }[
              info.getValue()
            ]
          }
        >
          {info.getValue()}
        </Badge>
      ),
    }),
  ];

  const table = useReactTable({
    data: consultanciesTable,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

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
  return (
    <>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          <button
            onClick={() =>
              setColumnFilters([{ id: "status", value: "Pending" }] as any)
            }
            className="p-3 flex items-center text-blue-500 text-sm font-medium leading-150 rounded bg-[#e4efff] gap-[10px]"
          >
            Pending
            <IoInformationCircleSharp />
          </button>
          <button
            onClick={() =>
              setColumnFilters([
                { id: "status", value: "Not Converted" },
              ] as any)
            }
            className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]"
          >
            Not Converted
            <IoInformationCircleSharp />
          </button>
          <button
            onClick={() =>
              setColumnFilters([{ id: "status", value: "Converted" }] as any)
            }
            className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]"
          >
            Converted
            <IoInformationCircleSharp />
          </button>
        </div>

        <FilterDropDown
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters as (value: any[]) => void}
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
