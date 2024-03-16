import { Button, Checkbox, Dropdown } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import React from "react";
import { Table } from "@tanstack/react-table";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { HiAdjustments } from "react-icons/hi";
import Link from "next/link";

interface Props {
  table: Table<any>;
  children: React.ReactNode;
  buttonName: string;
}

function Filters(props: Props) {
  const { table, children, buttonName } = props;
  return (
    <div className="rounded-lg relative w-full flex py-4 items-center justify-between">
      <div className="flex w-[350px]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <IoIosSearch />
        </div>
        <input
          type="text"
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search ID, Type, Name, Number..."
        />
      </div>

      <Popover className="relative z-30">
        {({ open }) => (
          <>
            <Popover.Button className="text-white flex gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <HiAdjustments className="h-5 w-5" />
              {buttonName} <ChevronDownIcon className="h-5 w-5" />
            </Popover.Button>

            {children}
          </>
        )}
      </Popover>
    </div>
  );
}

export default Filters;
