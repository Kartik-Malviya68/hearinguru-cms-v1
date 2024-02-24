import { Badge, Pagination, Table } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react'

function ClinicsTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <Table>
          <Table.Head>
            <Table.HeadCell>Staff ID</Table.HeadCell>
            <Table.HeadCell>About Clinic</Table.HeadCell>
            <Table.HeadCell>No of Staff</Table.HeadCell>
            <Table.HeadCell>Number</Table.HeadCell>
            <Table.HeadCell>Date of Join</Table.HeadCell>
            <Table.HeadCell>Activity status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Table.Row
                key={item}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>#345645</Table.Cell>
                <Table.Cell className="flex gap-2 items-center">
                  <Image
                    alt={"profile pic"}
                    width={32}
                    height={32}
                    style={{ objectFit: "contain", borderRadius: "999px" }}
                    src={"https://placehold.co/32x32.png"}
                  />
                  <div className="flex flex-col ">
                    <h4 className="text-gray-900 text-sm leading-150">
                      Dr Sudheer Pandey
                    </h4>
                    <p className="text-gray-500 text-ellipsis leading-150 text-sm">
                      Sudheer Pandey@gmail.com
                    </p>
                  </div>
                </Table.Cell>
                <Table.Cell>28</Table.Cell>
                <Table.Cell>+91 7600762445</Table.Cell>
                <Table.Cell className="text-gray-900 text-sm font-semibold leading-150">
                  12:24 PM, 23Apr 2024
                </Table.Cell>
                <Table.Cell>
                  <Badge style={{ width: "fit-content" }} color="success">
                    Present
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="w-full border-t pt-4 justify-between flex items-center">
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
  )
}

export default ClinicsTable
