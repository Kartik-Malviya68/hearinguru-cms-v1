"use client";

import dynamic from "next/dynamic";
import { Button, Dropdown } from "flowbite-react";
import React from "react";
import Card from "./_components/Card/Card";
import TabsTable from "./_components/TabsTable/TabsTable";
import { FaPlus } from "react-icons/fa6";
const BarChart = dynamic(() => import("./_components/Chart/BarChart"), {
  ssr: false,
});
const DonutChart = dynamic(() => import("./_components/Chart/DonutChart/DonutChart"), {
  ssr: false,
});
function admin() {
  return (
    <section className="p-8 w-full gap-[39px] flex flex-col">
      <div className="w-full gap-[39px] flex items-center justify-between">
        <div className="gap-1 flex flex-col justify-center">
          <h4 className="leading-150 text-4xl font-bold text-black">
            Dashboard
          </h4>
          <p className="leading-150 text-base font-normal text-gray-500">
            You can view performance, add, delete or sort category of a blog
            here.
          </p>
        </div>
        <Button
          href="/admin/dashboard/consultancies"
          style={{ height: "fit-content" }}
          size={"lg"}
          color="blue"
        >
          <span className="mr-1">
            <FaPlus />
          </span>
          Add New Consultancy
        </Button>
      </div>
      <div className="w-full flex-col gap-[39px] flex items-center justify-between">
        <div className="gap-6 flex w-full justify-between">
          <h4 className="leading-150 text-2xl font-semibold text-black">
            Analytics
          </h4>
          <Dropdown color="Dropdown" className="" label="Today">
            <Dropdown.Item>Analytics</Dropdown.Item>
            <Dropdown.Item>Tommorow</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="w-full gap-[39px] flex justify-center items-center">
          <Card heading="3.4k" value="Website Traffic" percentage="24%" />
          <Card heading="3.4k" value="Website Traffic" percentage="24%" />
          <Card heading="3.4k" value="Website Traffic" percentage="24%" />
          <Card heading="3.4k" value="Website Traffic" percentage="24%" />
        </div>
      </div>
      <div className="flex justify-center w-full gap-6">
        <BarChart />
        <DonutChart />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-xl font-bold leading-150 text-[#131D1E]">
          All Consultancies (Calling view)
        </h1>
        <TabsTable />
      </div>
    </section>
  );
}
export default admin;
