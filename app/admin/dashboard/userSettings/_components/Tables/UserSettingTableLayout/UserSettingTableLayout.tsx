import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Pagination, Table, Badge, Checkbox } from "flowbite-react";
import React, { useState } from "react";
import AdminTableColumn from "../Columns/AdminAndCallingTeamTableColumn";
// import { dummyData } from "@/app/admin/dashboard/manageWebsite/blogs/_components/BlogTable/DummyData";
import { adminTableDummyData } from "../dummydata";
import Filters from "../../Filters/Filters";
import { Dialog, Popover, Transition } from "@headlessui/react";
import EmptyState from "@/public/icons/Modals/EmptyState";
import NoDataRecords from "@/components/Tables/NoDataRecords/NoDataRecords";
// import { adminTableDummyData } from "../dummydata";

interface Props {
  data: any;
  columns: any;
}

export default function UserSettingTableLayout(props: Props) {
  const { data, columns } = props;
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([
    { id: "activityStatus", value: "" },
  ]);
  const table = useReactTable({
    getFilteredRowModel: getFilteredRowModel(),

    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    data: data, //dummyData,
    columns: columns(),
    state: {
      columnFilters,
      rowSelection,
      sorting: [],
    },
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
  console.log(columnFilters);
  console.log(table.getPageCount());
  return (
    <div className="w-full">
      <Filters table={table} buttonName="Filter">
        <Popover.Panel className="absolute bg-white w-[150px] -translate-x-1/2 transform px-4 sm:px-0">
          <div className="overflow-hidden z-[200] rounded-lg shadow-lg ring-1 ring-black/5">
            <label
              htmlFor="all"
              className="flex items-center p-3 hover:bg-gray-100 duration-200 cursor-pointer"
            >
              <Checkbox
                onChange={(e) =>
                  setColumnFilters([
                    { id: "activityStatus", value: e.target.value },
                  ])
                }
                checked={columnFilters[0].value === ""}
                name="filter"
                value=""
                color="blue"
                id="all"
              />
              <p className="ms-2 text-sm font-medium select-none text-gray-900 dark:text-gray-300">
                All{" "}
              </p>
            </label>
            <label
              htmlFor="Present"
              className="flex items-center p-3 hover:bg-gray-100 duration-200 cursor-pointer"
            >
              <Checkbox
                onChange={(e) =>
                  setColumnFilters([
                    { id: "activityStatus", value: e.target.value },
                  ])
                }
                checked={columnFilters[0].value === "Present"}
                name="filter"
                value="Present"
                color="blue"
                id="Present"
              />
              <p className="ms-2 text-sm font-medium select-none text-gray-900 dark:text-gray-300">
                Present{" "}
              </p>
            </label>
            <label
              htmlFor="Deleted "
              className="flex items-center p-3 hover:bg-gray-100 duration-200 cursor-pointer"
            >
              <Checkbox
                onChange={(e) =>
                  setColumnFilters([
                    { id: "activityStatus", value: e.target.value },
                  ])
                }
                checked={columnFilters[0].value === "Deleted"}
                value="Deleted"
                name="filter"
                color="blue"
                id="Deleted "
              />
              <p className="ms-2 text-sm font-medium select-none text-gray-900 dark:text-gray-300">
                Deleted{" "}
              </p>
            </label>
          </div>
        </Popover.Panel>
      </Filters>
      <div className="overflow-hidden w-full">
        {table.getPageCount() < 1 ? (
          <NoDataRecords />
        ) : (
          <Table>
            <Table.Head>
              {table
                .getHeaderGroups()
                .map((headerGroup: { headers: any[] }) =>
                  headerGroup.headers.map((header) => (
                    <Table.HeadCell key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Table.HeadCell>
                  ))
                )}
            </Table.Head>

            <Table.Body className="divide-y">
              {table
                .getRowModel()
                .rows.map(
                  (row: {
                    id: React.Key | null | undefined;
                    getVisibleCells: () => any[];
                  }) => (
                    <Table.Row key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <Table.Cell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  )
                )}
            </Table.Body>
          </Table>
        )}
      </div>
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
  );
}
