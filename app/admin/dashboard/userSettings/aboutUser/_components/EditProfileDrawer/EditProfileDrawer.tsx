import { Drawer } from "@mui/material";
import { Button, Datepicker } from "flowbite-react";
import React from "react";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";

import { IoClose } from "react-icons/io5";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import Image from "next/image";
import Download from "@/public/icons/icons/download";
import Pdf from "@/public/icons/icons/pdf";
import RedModals from "@/components/Modals/RedModals/RedModals";
interface Props {
  closeDrawer: () => void;
  openDrawer: boolean;
}
function EditProfileDrawer(props: Props) {
  const { closeDrawer, openDrawer } = props;

  return (
    <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
      <div className="w-[706px]  flex pt-0 p-4 flex-col items-start gap-8 ">
        <div
          id="heading"
          className="flex gap-2 sticky top-0  bg-white py-4 z-20 items-center w-full justify-between"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full">
            <IoClose className="cursor-pointer" onClick={closeDrawer} />
          </div>
          <h4 className="text-gray-500 w-full leading-150 uppercase font-semibold">
            Edit Profile
          </h4>

          <Button color="failure" fullSized size={"sm"}>
            Cancel
          </Button>
          <Button color="blue" fullSized size={"sm"}>
            Save
          </Button>
        </div>
        <div className="w-full">
          <label
            htmlFor="Title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="Contactnumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact number
          </label>
          <input
            type="text"
            id="Contactnumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Contact number"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="Gender"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender
          </label>
          <select
            id="Gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="Male">
              Male
            </option>
            <option value="Female">Female</option>
            <option value="prefer not to say">prefer not to say</option>
            <option value="none">none</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="Role"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Role
          </label>
          <select
            id="Role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="Calling Team">
              Calling Team
            </option>
            <option value="Calling Team">Calling Team</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="Email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="text"
            id="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Email Address"
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
            id="Address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address"
          />
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
            htmlFor="Pincode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pincode
          </label>
          <input
            type="Pincode"
            id="City"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pincode"
          />
        </div>
        <div className="flex flex-col justify-between h-[248px] w-full">
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
    </Drawer>
  );
}

export default EditProfileDrawer;
