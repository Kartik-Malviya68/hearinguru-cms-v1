import { Button, Pagination } from "flowbite-react";
import React, { useState } from "react";
import Table from "../BlogTable/BlogTable";
function AllBlogsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <div className="flex justify-between gap-5 w-full">
        <div className="flex items-center">
          <button className="p-3 flex items-center text-blue-500 text-sm font-medium leading-150 rounded bg-[#e4efff] gap-[10px]">
            All
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Hear loss
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Types & Causes
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Symptoms
          </button>
          <button className="p-3 flex items-center text-gray-600 text-sm font-medium leading-150 rounded  gap-[10px]">
            Prevention
          </button>
        </div>
        <Button color="failure" className="w-[147px]" size={'sm'}>Delete</Button>
      </div>
      <div className="bg-white shadow w-full flex flex-col rounded-lg">
        <Table />
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

export default AllBlogsTable;
