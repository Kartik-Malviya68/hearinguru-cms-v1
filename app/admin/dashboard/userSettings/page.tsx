"use client";

import React from "react";

import UserSettingTable from "./_components/UserSettingTable/UserSettingTable";

function admin() {
  
  return (
    <section className="p-8 w-full gap-[39px] flex flex-col">
      <div className="w-full gap-[39px] flex items-center justify-between">
        <div className="gap-1 flex flex-col justify-center">
          <h4 className="leading-150 text-4xl font-bold text-black">
            User Settings
          </h4>
          <p className="leading-150 text-base font-normal text-gray-500">
            You can view all your employees details and edit the authority
          </p>
        </div>
      </div>

      <UserSettingTable />
    </section>
  );
}
export default admin;
