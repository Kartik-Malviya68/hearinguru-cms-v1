import { Table } from "flowbite-react";
import React from "react";
interface props {
  table: any;
  flexRender: any;
}
function ConsultanciesTable(Props: props) {
  const { flexRender, table } = Props;

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

export default ConsultanciesTable;
