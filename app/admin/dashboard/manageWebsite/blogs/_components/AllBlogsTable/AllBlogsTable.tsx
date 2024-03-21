import { Button, Pagination } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import Table from "../BlogTable/BlogTable";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import columns from "../BlogTable/TableColumn";
import useHandleAsync from "@/modules/StateManagement/useHandleAsync/useHandleAsync";
import fetchBlogData from "../../_fetch/services/getBlogData";
import RedModals from "@/components/Modals/RedModals/RedModals";
import { useToggle } from "@/modules/StateManagement/useToggle/useToggle";
import deleteBlog from "../../_fetch/services/deleteBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface AllBlogsTableInteraction {
  filterRecordsFromQuery: (query: string) => void;
}

interface Props {
  setInteraction?: (v: AllBlogsTableInteraction) => void;
}

function AllBlogsTable({ setInteraction }: Props) {
  const [showModal, setShowModal] = useToggle();
  const [checked, setChecked] = useState(true);
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
  React.useEffect(() => {
    fetcher();
  }, []);

  const [dState, dLoading, dFetcher] = useHandleAsync(deleteBlog, {
    onSuccess: () => {
      toast("Blog Deleted Successfully", { type: "success" });
      window.location.reload();
    },
    onError: () => {
      toast("Error Deleting Blog", { type: "error" });
    },
  });

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
    columns: columns({ setChecked }),
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
  useEffect(() => {
    const selectedLength = Object.entries(table.getState().rowSelection).length;
    setChecked(selectedLength !== 0);
    console.log("table.getState().rowSelection", table.getState().rowSelection);
  }, [Object.entries(table.getState().rowSelection).length]);

  const selectedBlogs = (() => {
    const selectedIndices = Object.keys(table.getState().rowSelection);
    return selectedIndices.map((v) => (xstate ? xstate[parseInt(v)] : null));
  })();
  console.log(
    "selectedBlogs",
    selectedBlogs.map((v) => v?.blogId || "").join(",")
  );

  table.getState().rowSelection;
  const buttonTabs = [
    { id: 1, name: "All", value: "" },
    { id: 2, name: "Hear loss", value: "Hear loss" },
    { id: 3, name: "Types & Causes", value: "Types And Causes" },
    { id: 4, name: "Symptoms", value: "Symptoms" },
    { id: 5, name: "Prevention", value: "Prevention" },
  ];

  setInteraction &&
    setInteraction({
      filterRecordsFromQuery: function (query: string): void {
        table.setGlobalFilter(query);
      },
    });

  return (
    <>
      <RedModals
        from="Blog"
        title={selectedBlogs.map((v) => v?.title || "").join(",")}
        redBtnLoading={dLoading.isLoading()}
        redButton={() => {
          dFetcher(selectedBlogs.map((v) => v?.blogId || "").join(","));
        }}
        openModal={showModal}
        setOpenModal={setShowModal.hide}
      />
      <ToastContainer />
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
                  ? "bg-[#e4efff] text-blue-500"
                  : "bg-white text-gray-500"
              } text-sm font-medium leading-150 rounded bg-[#e4efff] gap-[10px]`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <Button
          onClick={setShowModal.toggle}
          color="failure"
          disabled={!checked}
          className="w-[147px]"
          size={"sm"}
        >
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
