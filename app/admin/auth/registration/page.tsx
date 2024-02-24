"use client";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import React from "react";
import dynamic from "next/dynamic";
import NavigationBar from "../components/NavigationBar/NavigationBar";
const RegistrationCard = dynamic(
  () => import("../components/RegistrationCard/RegistrationCard"),
  {
    ssr: false,
  }
);
function page() {
  return (
    <React.Fragment>
      <NavigationBar name="Register" />
      <div className="m-auto gap-14 max-w-[1180px] flex justify-center items-center w-full">
        <div className="p-[10px] gap-14 w-full flex justify-center items-center">
          <div className="flex max-w-[1180px] items-start justify-between">
            <div className="h-[427px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-start gap-6 w-full">
                <HearinguruAdminLogo className="scale-150 origin-left" />
                <h6 className="text-gray-900 font-extrabold text-6xl">
                  Register
                </h6>
                <p className="text-base font-normal">
                  View and manage all of your hearinguru accounts from one
                  dashboard
                </p>
              </div>
            </div>
          </div>
        </div>

        <RegistrationCard />
      </div>
    </React.Fragment>
  );
}

export default page;
