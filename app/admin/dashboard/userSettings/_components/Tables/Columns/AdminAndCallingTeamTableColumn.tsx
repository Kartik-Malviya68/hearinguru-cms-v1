import { createColumnHelper } from "@tanstack/react-table";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Dialog, Popover, Transition } from "@headlessui/react";
const columnHelper =
  createColumnHelper<UserSettingsTypes.UserSettingsTable.adminAndCallingTeamTable>();
import { Badge } from "flowbite-react";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const AdminAndCallingTeamTableColumn = () => {
  const AdmincolumnsLayout = [
    columnHelper.accessor("staffId", {
      header: "Staff  ID",
      cell: (v) => `#${v.getValue()}`,
    }),

    columnHelper.accessor("name", {
      id: "name",

      header: "Name",
      cell: (v) => (
        <div className="flex gap-2 items-center">
          <span className="relative h-10 w-10">
            <Image
              alt={"profile pic"}
              layout="fill"
              style={{ objectFit: "cover", borderRadius: "999px" }}
              src={v.getValue().profilePic}
            />
          </span>
          <div className="flex flex-col ">
            <h4 className="text-gray-900 text-sm leading-150">
              {v.getValue().fullname}
            </h4>
            <p className="text-gray-500 text-ellipsis leading-150 text-sm">
              {v.getValue().email}
            </p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("role", {
      header: "ROLE",
      cell: (v) => v.getValue(),
    }),
    columnHelper.accessor("contactNumber", {
      header: "Number",
      cell: (v) => v.getValue(),
    }),
    columnHelper.accessor("dateOfJoin", {
      header: "Date of Join",
      cell: (v) => v.getValue().toLocaleString("en-IN"),
    }),
    columnHelper.accessor("activityStatus", {
      id: "activityStatus",
      header: "Activity status",
      cell: (v) => (
        <Badge
          className="w-[60px]"
          color={v.getValue() === "Deleted" ? "failure" : "success"}
        >
          {v.getValue()}
        </Badge>
      ),
      size: 150,
    }),

    columnHelper.display({
      id: "actions",
      cell: (v) => (
        <Popover className="relative">
          <>
            <Popover.Button className="focus-visible:outline-none z-10">
              <div className="p-2  border-[0.5px] border-white hover:border-gray-200 duration-200 hover:bg-gray-200 rounded-xl">
                <DotsVerticalIcon className="h-4 w-4 text-black" />
              </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-20 mt-3  w-[150px] -translate-x-1/2 transform px-4 sm:px-0">
              <div className="overflow-hidden z-[200] rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative flex flex-col gap-7 p-4 bg-white">
                  <Link
                    href=""
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                  >
                    Documents
                  </Link>
                  <Link
                    href=""
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </>
        </Popover>
      ),
      size: 100,
    }),
  ];
  return AdmincolumnsLayout;
};

export default AdminAndCallingTeamTableColumn;
