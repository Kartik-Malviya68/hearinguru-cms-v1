import { Dropdown } from "flowbite-react";
import React from "react";

interface props {
  columnFilters: any;
  setColumnFilters: ([]) => void;
}
function FilterDropDown({ columnFilters, setColumnFilters }: props) {
  const handleFilter = (value: string) => {
    setColumnFilters([
      {
        id: "consultancyType",
        value: value,
      },
    ]);
  };

  return (
    <Dropdown arrowIcon color="blue" className="" label="Filter">
      <Dropdown.Item onClick={() => handleFilter("")}>All</Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilter("Appointment")}>
        Appointment
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilter("Warranty & Exchange")}>
        Warranty & Exchange
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilter("Repair & Maintenance")}>
        Repair & Maintenance
      </Dropdown.Item>
    </Dropdown>
  );
}

export default FilterDropDown;
