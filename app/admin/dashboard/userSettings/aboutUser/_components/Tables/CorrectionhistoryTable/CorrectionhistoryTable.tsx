import { Badge, Datepicker, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
function CorrectionhistoryTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="gap-5 flex flex-col items-start w-full">
      <h5 className="text-[#131d1e] text-xl font-bold leading-150">
        All Correction history{" "}
      </h5>
      <div className="rounded-lg bg-white shadow w-full">
        <div className="w-full p-4 flex items-center justify-between">
          <Datepicker color={"blue"} />
          <div className="relative w-[350px] ">
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
        <div className="overflow-x-auto w-full">
          <Table>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Client</Table.HeadCell>
              <Table.HeadCell>DATE & TIME</Table.HeadCell>
              <Table.HeadCell>Data Edited</Table.HeadCell>
              <Table.HeadCell>Consultancy Type</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <Table.Row
                  key={item}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>#345645</Table.Cell>
                  <Table.Cell>Vivek Joshi</Table.Cell>
                  <Table.Cell>Apr 23 ,2021 12:20 PM</Table.Cell>
                  <Table.Cell>Slot Changed</Table.Cell>
                  <Table.Cell>Appointment</Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-blue-600 underline text-sm leading-150"
                      href={""}
                    >
                      {"View>>"}
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
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
    </div>
  );
}

export default CorrectionhistoryTable;
