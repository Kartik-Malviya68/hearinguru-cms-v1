import { createColumnHelper } from "@tanstack/react-table";
import { Badge } from "flowbite-react";

const columnHelper = createColumnHelper<ConsultancyTypes.ConsultanciesTable>();
export const columns = [
  columnHelper.accessor("consultancyId", {
    header: () => "ID",
    cell: (info) =>
      info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1),
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) =>
      info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1),
  }),
  columnHelper.accessor("dateAndTime", {
    header: () => "DATE & TIME",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("phoneNumber", {
    header: () => "Phone Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("consultancyType", {
    id: "consultancyType",
    header: () => "Consultancy Type",
    cell: (info) => info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1)
  }),
  columnHelper.accessor("slot", {
    header: () => "Slot",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    filterFn: (rows, id, value) => {
      if (value === "") return true;
      if (value === "Pending") return rows.original.status === "Pending";
      if (value === "Not Converted")
        return rows.original.status === "Not Converted";
      if (value === "Converted") return rows.original.status === "Converted";

      return false;
    },

    id: "status",
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
