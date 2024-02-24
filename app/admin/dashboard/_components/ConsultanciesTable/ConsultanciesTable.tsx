import { Badge, Table } from "flowbite-react";
import React from "react";

function ConsultanciesTable() {
  return (
    <div className="overflow-x-auto w-full">

      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>DATE & TIME</Table.HeadCell>
          <Table.HeadCell>Phone Number</Table.HeadCell>
          <Table.HeadCell>Consultancy Type</Table.HeadCell>
          <Table.HeadCell>Slot</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Table.Row key={item} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>#345645</Table.Cell>
              <Table.Cell>Vivek Joshi</Table.Cell>
              <Table.Cell>Apr 23 ,2021 12:20 PM</Table.Cell>
              <Table.Cell>+91 760005465111</Table.Cell>
              <Table.Cell>Appointment</Table.Cell>
              <Table.Cell>------------</Table.Cell>
              <Table.Cell><Badge style={{width: 'fit-content'}} color="purple">Pending</Badge></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ConsultanciesTable;
