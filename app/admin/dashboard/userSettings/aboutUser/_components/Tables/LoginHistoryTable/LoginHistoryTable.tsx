import { Datepicker, Pagination, Table } from "flowbite-react";
import React, { useState } from "react";

function LoginHistoryTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="gap-5 flex flex-col items-start w-full">
      <h5 className="text-[#131d1e] text-xl font-bold leading-150">
        Login History
      </h5>
      <div className="w-full flex  justify-between items-center">
        <h5 className="text-gray-900 text-base font-medium leading-150">
          Login Entries
        </h5>
        <Datepicker color={"blue"} />
      </div>
      <div className="overflow-x-auto w-full">
        <Table>
          <Table.Head className="text-gray-500 border-b border-gray-200 font-semibold text-xs">
            <Table.HeadCell>Data</Table.HeadCell>
            <Table.HeadCell>Login time</Table.HeadCell>
            <Table.HeadCell>logout time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Table.Row
                key={item}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>02/1/24</Table.Cell>
                <Table.Cell>9:30 am</Table.Cell>
                <Table.Cell>---------</Table.Cell>
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
  );
}

export default LoginHistoryTable;
