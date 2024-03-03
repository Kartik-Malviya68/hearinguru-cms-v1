import useStamina from "@/modules/StateManagement/Stamina/useStamina";

import { Checkbox, Table } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { dummyData } from "./DummyData";

interface BlogTableProps {
  table: any;
  flexRender: any;
}

function BlogTable({ table, flexRender }: BlogTableProps) {
  const title = `The importance of ear care: Protecting yourself and your oneshealth`;

  return (
    <div className="overflow-x-auto w-full">
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
    </div>
  );
}

export default BlogTable;
