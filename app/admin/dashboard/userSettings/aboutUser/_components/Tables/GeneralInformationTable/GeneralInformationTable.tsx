import { Table } from "flowbite-react";
import React from "react";

function GeneralInformationTable() {
  return (
    <div className="gap-5 flex flex-col items-start w-full">
      <h5 className="text-[#131d1e] text-xl font-bold leading-150">
        Patients General Informationy{" "}
      </h5>
      <div className="overflow-x-auto w-full">
        <Table>
          <Table.Head className="text-gray-500 border-b border-gray-200 font-semibold text-xs">
            <Table.HeadCell>Data</Table.HeadCell>
            <Table.HeadCell>Information</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Name
              </Table.Cell>
              <Table.Cell>Sudheer Pandey</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Contact Number
              </Table.Cell>
              <Table.Cell>+91 7600756995</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Role
              </Table.Cell>
              <Table.Cell className="text-green-500">ADMIN</Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Email Address
              </Table.Cell>
              <Table.Cell>sudheerpandey@gmail.com</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Address
              </Table.Cell>
              <Table.Cell>c67, saivillas, bhandra, Mumbai</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                City
              </Table.Cell>
              <Table.Cell>Mumbai, Maharashtra</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Pincode
              </Table.Cell>
              <Table.Cell>395005</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="bg-gray-50 text-gray-900 font-normal text-sm">
                Date of Joining
              </Table.Cell>
              <Table.Cell>Apr 18, 2021 12:30 pm</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default GeneralInformationTable;
