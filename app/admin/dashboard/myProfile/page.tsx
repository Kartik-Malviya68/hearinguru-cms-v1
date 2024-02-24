import Download from "@/public/icons/icons/download";
import Pdf from "@/public/icons/icons/pdf";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function page() {
  return (
    <section className="p-8 pt-0 overflow-auto  w-full gap-[39px] flex flex-col">
      <div className="w-full py-8 sticky bg-white z-30 top-0 gap-[39px] flex items-center justify-between">
        <div className="gap-1 flex flex-col justify-center">
          <h4 className="leading-150 text-4xl font-bold text-black">
            My Profile
          </h4>
          <p className="leading-150 text-base font-normal text-gray-500">
            You can view and edit your profile from here
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button style={{ height: "fit-content" }} size={"lg"} color="blue">
            Save Changes
          </Button>
          <Button style={{ height: "fit-content" }} size={"lg"} color="light">
            Reset Changes
          </Button>
          <Button style={{ height: "fit-content" }} size={"lg"} color="failure">
            <span className="mr-1">
              <AiOutlineClose />
            </span>
            Deactivate My Account
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-[39px] w-full">
        <Image
          width={144}
          height={144}
          alt="profile"
          style={{ borderRadius: "9999px" }}
          src={"https://placehold.co/144x144/png"}
        />
        <div className="flex w-[848px] p-2 flex-col gap-3 items-start rounded-[9px]  border border-gray-200">
          <div className="w-full">
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Name"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="MobileNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile Number
            </label>
            <input
              type="text"
              readOnly
              id="MobileNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 Mobile Number"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              readOnly
              id="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <select
              id="Gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Male</option>
              <option value="US">Female</option>
              <option value="US">not prefer to say</option>
              <option value="US">none</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="Role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <select
              id="Role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Role</option>
              <option value="US">Role</option>
              <option value="US">Role</option>
              <option value="US">Role</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="City"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="City"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              readOnly
              id="Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Pincode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pincode
            </label>
            <input
              type="text"
              readOnly
              id="Pincode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pincode"
            />
          </div>
          <div className="flex flex-col justify-between w-full h-[248px]">
            <div className="flex flex-col items-start gap-6 w-full">
              <h5 className="text-gray-900 font-bold leading-[130%] text-lg">
                Employee ID Card
              </h5>
              <div className="flex p-2 rounded-lg bg-gray-50 justify-between items-center w-full">
                <div className="flex items-start gap-2 flex-col ">
                  <div className="flex gap-2 items-center">
                    <Pdf />
                    <h5 className="text-sm leading-150 text-gray-900">
                      SUDHERCMS.ID
                    </h5>
                  </div>
                  <span className="text-gray-500 flex gap-2 font-normal leading-150 text-xs">
                    <p>12 Pages</p>
                    <p>.</p>
                    <p>18 MB</p>
                    <p>.</p>
                    <p>PDF</p>
                  </span>
                </div>
                <Download />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
              <h5 className="text-gray-900 font-bold leading-[130%] text-lg">
                Aadhar ID
              </h5>
              <div className="flex p-2 rounded-lg bg-gray-50 justify-between items-center w-full">
                <div className="flex items-start gap-2 flex-col ">
                  <div className="flex gap-2 items-center">
                    <Pdf />
                    <h5 className="text-sm leading-150 text-gray-900">
                      SUDHERCMS.ID
                    </h5>
                  </div>
                  <span className="text-gray-500 flex gap-2 font-normal leading-150 text-xs">
                    <p>12 Pages</p>
                    <p>.</p>
                    <p>18 MB</p>
                    <p>.</p>
                    <p>PDF</p>
                  </span>
                </div>
                <Download />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
