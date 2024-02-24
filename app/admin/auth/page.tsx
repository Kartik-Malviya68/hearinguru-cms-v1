import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import React from "react";
import LoginCard from "./components/LoginCard/LoginCard";

export default function page() {
  return (
    <div className="p-[10px] gap-14 m-auto max-w-[1180px] w-full flex justify-center items-center">
      <div className="flex max-w-[1180px] items-start justify-between">
        <div className="h-[427px] flex flex-col items-center justify-center">
          <div className="flex flex-col items-start gap-6 w-full">
            <HearinguruAdminLogo className="scale-150 origin-left" />
            <h6 className="text-gray-900 font-extrabold text-6xl">
              Welcome Admin
            </h6>
            <p className="text-base font-bold">
              Reminder:{" "}
              <span className="font-normal">
                Only for authorized and staff members. Visitors stay away or
                ready to face legal terms.
              </span>
            </p>
          </div>
        </div>
      </div>

      <LoginCard />
    </div>
  );
}
