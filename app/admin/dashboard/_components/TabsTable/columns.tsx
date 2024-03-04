import { createColumnHelper } from "@tanstack/react-table";
import { Badge } from "flowbite-react";

const columnHelper =
  createColumnHelper<ConsultanciesTableTypes.ConsultanciesTable>();
export const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dateAndTime", {
    header: () => "DATE & TIME",
    cell: (info) => info.getValue().toLocaleString("en-IN"),
  }),
  columnHelper.accessor("phoneNumber", {
    header: () => "Phone Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("consultancyType", {
    header: () => "Consultancy Type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("slot", {
    header: () => "Slot",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => (
      <Badge
        style={{ width: "fit-content" }}
        color={
          { Pending: "purple", "Not Converted": "gray", Converted: "green" }[
            info.getValue()
          ]
        }
      >
        {info.getValue()}
      </Badge>
    ),
  }),
];
