/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from "react";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

function page() {
    const router = useRouter();
  return (
    <React.Fragment>
      <NavigationBar name="Register"  />
      <div className="p-[10px] gap-14 m-auto max-w-[1180px] w-full flex justify-center items-center">
        <div className="flex w-full items-start justify-between">
          <div className="h-[427px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-start gap-6 w-full">
              <HearinguruAdminLogo className="scale-150 origin-left" />
              <h6 className="text-gray-900 font-extrabold text-6xl">
                Verify Your ID
              </h6>
            </div>
          </div>
        </div>
        <div className="m-auto w-full flex flex-col justify-center items-center">
          <div className="flex w-full rounded-lg p-8 gap-6 border shadow-sm border-gray-200 items-start flex-col">
            <h3 className="text-gray-900 text-xl font-bold leading-[150%]">
              ID Verification
            </h3>
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload employee ID
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-xs text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                A note for extra info
              </p>
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload aadhar ID
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-xs text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                A note for extra info
              </p>
            </div>
            <Button color="CTA" size={'md'} onClick={()=>router.push('/admin/auth/registration/otp/Verifyid/Filldetails')} fullSized outline={false}>Continue</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default page;
