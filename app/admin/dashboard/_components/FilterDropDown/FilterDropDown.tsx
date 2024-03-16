import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Checkbox, Dropdown } from "flowbite-react";
import React, { useId } from "react";
import { HiAdjustments } from "react-icons/hi";
interface Props {
  table: Table<any>;
  buttonName: string;
  setColumnFilters: any;
  columnFilters: any;
}

const Filters = [
  { id: "1", value: "" },
  { id: "2", value: "Appointment" },
  { id: "3", value: "Warranty & Exchange" },
  { id: "4", value: "Repair & Maintenance" },
];

function FilterDropDown(props: Props) {
  const { table, setColumnFilters, columnFilters } = props;
  console.log("columnFilters", columnFilters);
  return (
    <Popover className="relative z-30">
      <>
        <Popover.Button className="text-white flex gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <HiAdjustments className="h-5 w-5" />
          Filter <ChevronDownIcon className="h-5 w-5" />
        </Popover.Button>
        <Popover.Panel className="absolute bg-white w-[200px] -translate-x-1/2 transform px-4 sm:px-0">
          <div className="overflow-hidden z-[200] rounded-lg shadow-lg ring-1 ring-black/5">
            {Filters.map((item) => (
              <label
                htmlFor={item.id}
                className="flex items-center p-3 hover:bg-gray-100 duration-200 cursor-pointer"
              >
                <Checkbox
                  onChange={(e) =>
                    setColumnFilters([
                      { id: "consultancyType", value: e.target.value },
                    ])
                  }
                  checked={columnFilters[0].value === item.value}
                  name="filter"
                  value={item.value}
                  color="blue"
                  id={item.id}
                />
                <p className="ms-2 text-sm font-medium select-none text-gray-900 dark:text-gray-300">
                  {item.value === "" ? "All" : item.value}
                </p>
              </label>
            ))}
          </div>
        </Popover.Panel>
      </>
    </Popover>
  );
}

export default FilterDropDown;
