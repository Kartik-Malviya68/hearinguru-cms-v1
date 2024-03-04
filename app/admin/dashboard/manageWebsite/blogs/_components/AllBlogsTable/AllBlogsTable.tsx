import { Button, Pagination } from "flowbite-react";
import React from "react";
import Table from "../BlogTable/BlogTable";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { dummyData } from "../BlogTable/DummyData";
import columns from "../BlogTable/TableColumn";
import useHandleAsync from "@/modules/StateManagement/useHandleAsync/useHandleAsync";
import fetchBlogData from "../../_fetch/services/getBlogData";
function AllBlogsTable() {
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
  const [rowSelection, setRowSelection] = React.useState({});
  const [xstate, loading, fetcher] = useHandleAsync(fetchBlogData);
  console.log(rowSelection)
  React.useEffect(() => {
    fetcher();
  }, []);
  const [columnFilters, setColumnFilters] = React.useState([
    { id: "category", value: "" },
  ]);
  const table = useReactTable({
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    data: xstate || [], //dummyData,
    columns: columns(),
    state: {
      columnFilters,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 6,
      },
    },
  });

  const buttonTabs = [
    { id: 1, name: "All", value: "" },
    { id: 2, name: "Hear loss", value: "Hear loss" },
    { id: 3, name: "Types & Causes", value: "Types And Causes" },
    { id: 4, name: "Symptoms", value: "Symptoms" },
    { id: 5, name: "Prevention", value: "Prevention" },
  ];
  return (
    <>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          {buttonTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setColumnFilters([{ id: "category", value: tab.value }] as any)
              }
              className={`p-3 flex items-center text-blue-500 ${
                columnFilters[0].value === tab.value
                  ? "bg-[#e4efff]"
                  : "bg-white"
              } text-sm font-medium leading-150 rounded bg-[#e4efff] gap-[10px]`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <Button color="failure" className="w-[147px]" size={"sm"}>
          Delete
        </Button>
      </div>
      <div className="bg-white shadow w-full flex flex-col rounded-lg">
        <Table table={table} flexRender={flexRender} />
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

export default AllBlogsTable;
