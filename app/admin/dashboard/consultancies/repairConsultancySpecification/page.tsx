"use client";

import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import { editOutline } from "@/public/icons/icons";
import { Drawer } from "@mui/material";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Badge,
  Breadcrumb,
  Button,
  Datepicker,
  Dropdown,
} from "flowbite-react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function page() {
  const [{ DrawerVisible }, actions] = useStamina({
    initialState: {
      DrawerVisible: false,
    },
    actions: {
      openDrawer(v) {
        v.DrawerVisible = true;
      },
      closeDrawer(v) {
        v.DrawerVisible = false;
      },
    },
  });

  return (
    <>
      <Drawer anchor="right" open={DrawerVisible} onClose={actions.closeDrawer}>
        <div className="w-[476px]  flex pt-0 p-4 flex-col items-start gap-8 ">
          <div
            id="heading"
            className="flex sticky top-0  bg-white py-4 z-20 items-center w-full justify-between"
          >
            <h4 className="text-gray-500 leading-150 uppercase font-semibold">
              Edit Info
            </h4>
            <div className="w-7 h-7 flex items-center justify-center rounded-full  hover:bg-gray-200">
              <IoClose
                className="cursor-pointer"
                onClick={actions.closeDrawer}
              />
            </div>
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Name"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="ConsultationType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Consultation Type
            </label>
            <select
              id="ConsultationType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected value="Repair and Maintenance">
                Repair and Maintenance
              </option>
            </select>
          </div>

          <div className="flex p-3 flex-col items-start gap-3 w-full border border-gray-300 rounded-2xl">
            <div className="w-full">
              <label
                htmlFor="SelectHearingAidCompany"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Hearing Aid Company
              </label>
              <select
                id="SelectHearingAidCompany"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value="US">
                  Select Type
                </option>
                <option value="Repair and Maintenance">
                  Repair and Maintenance
                </option>
                <option value="Appointment">Appointment</option>
                <option value="Warranty & Exchange">Warranty & Exchange</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="SelectHearingAidCompany"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Hearing Aid Company
              </label>
              <select
                id="SelectHearingAidCompany"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value="US">
                  Select Type
                </option>
                <option value="Repair and Maintenance">
                  Repair and Maintenance
                </option>
                <option value="Appointment">Appointment</option>
                <option value="Warranty & Exchange">Warranty & Exchange</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="SelectIssue"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Issue
              </label>
              <select
                id="SelectIssue"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value="US">
                  Select Type
                </option>
                <option value="Repair and Maintenance">
                  Repair and Maintenance
                </option>
                <option value="Appointment">Appointment</option>
                <option value="Warranty & Exchange">Warranty & Exchange</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="SelectStatus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Status
              </label>
              <select
                id="Select Status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value="US">
                  Select Type
                </option>
                <option value="Repair and Maintenance">
                  Repair and Maintenance
                </option>
                <option value="Appointment">Appointment</option>
                <option value="Warranty & Exchange">Warranty & Exchange</option>
              </select>
            </div>
            <div className="w-full">
              <div className=" mb-2 flex w-full justify-between items-center">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                  Issue
                </h5>
                <p className="text-gray-500 text-xs leading-150">
                  A note for extra info
                </p>
              </div>

              <div className="w-full  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write text here ..."
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Save
                  </button>
                  <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                        />
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      <span className="sr-only">Set location</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="ContactNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="ContactNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 Mobile Number"
            />
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
              id="EmailAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email here"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Slotdate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slot
            </label>
            <Datepicker color={"blue"} />
          </div>
          <div className="w-full">
            <label
              htmlFor="Status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="Status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="US">
                Pending
              </option>
              <option value="US">Success</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor=" IssueResolved"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Issue Resolved
            </label>
            <select
              id="IssueResolved"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="Yes">
                Yes
              </option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="w-full">
            <div className=" mb-2 flex w-full justify-between items-center">
              <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                Your message
              </h5>
              <p className="text-gray-500 text-xs leading-150">
                A note for extra info
              </p>
            </div>

            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write text here ..."
                  defaultValue={""}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Save
                </button>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Max. File Size: 30MB
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="gap-3 w-full flex items-center">
            <Button color="light" fullSized size={"md"} outline>
              Cancel
            </Button>
            <Button color="blue" fullSized size={"md"}>
              Save
            </Button>
          </div>
        </div>
      </Drawer>
      <section className="relative w-full overflow-auto">
        <div className="w-full flex-col p-8 pb-0 sticky top-0 z-20 bg-white  flex justify-between items-center">
          <div className="flex justify-between  items-center w-full">
            <Breadcrumb className="bg-gray-50 px-5 py-3  dark:bg-gray-800 ">
              <Breadcrumb.Item href="#" icon={FaClipboardCheck}>
                Consultancies
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                Repair Consultancy Specification
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="gap-3 w-[433px] justify-between flex items-center">
              <Button
                href="/admin/dashboard/consultancies"
                style={{ height: "fit-content" }}
                size={"lg"}
                color="blue"
              >
                <span className="mr-1">
                  <FaPlus />
                </span>
                Add New Consultation to Existing
              </Button>
              <Button
                outline={false}
                size={"lg"}
                className="bg-red-500"
                color="failure"
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="flex w-full justify-end items-center">
            <div className="flex py-6 items-center">
              <Dropdown
                label="Change Status"
                style={{ borderRadius: "6px 0px 0px 6px" }}
                color="ChangeStatus"
                size={"lg"}
                dismissOnClick={false}
              >
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <span className="py-3 px-4 bg-indigo-600 text-white  font-medium rounded-r-md">
                Pending
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[39px] p-8 pt-0 items-start">
          <div className="flex flex-col min-w-[722px]  items-start gap-[39px]">
            <div className="flex flex-col w-full  items-start gap-5">
              <div className="flex justify-between w-full items-center">
                <h4 className="text-gray-900 text-base leading-[2.5rem] font-medium">
                  Consultation Appointment Specification
                </h4>
                <div
                  onClick={actions.openDrawer}
                  className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full  hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    className="w-6  h-6 text-gray-800 dark:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid w-full rounded-lg bg-white shadow grid-cols-2 grid-rows-10">
                <div className="p-4 flex items-center border-b border-gray-200 w-full text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tl-lg bg-gray-50">
                  Data
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tr-lg bg-gray-50">
                  Information
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Name
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Sudheer Pandey
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Registered by
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Clinic Management (CM)
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Consultation Type
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Appointment (Online)
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Contact Number
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  +91 7600756995
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Email Address
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  No
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Date Created
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  No
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Slot Book
                </div>
                <div className="p-4 flex justify-between items-center border-b w-full border-gray-200 text-green-700 text-sm uppercase font-normal leading-150 bg-white">
                  Apr 20, 2021 13:30
                  <Badge
                    color="success"
                    className="rounded-md normal-case"
                    icon={editOutline}
                  >
                    Change Slot
                  </Badge>
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  User Logged In
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-green-400 text-sm uppercase font-normal leading-150 bg-white">
                  Yes
                </div>
                <div className="p-4 flex items-center rounded-bl-lg border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Status
                </div>
                <div className="p-4 flex items-center rounded-br-lg  justify-between border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  <Badge
                    color="purple"
                    className="normal-case rounded-md"
                    size={"sm"}
                  >
                    Pending
                  </Badge>
                  <Badge
                    color="success"
                    className="rounded-md normal-case"
                    icon={editOutline}
                  >
                    Change Status
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full  items-start gap-5">
              <div className="flex justify-between w-full items-center">
                <h4 className="text-gray-900 text-base leading-6 font-medium">
                  Repair & Maintenance
                </h4>
              </div>
              <div className="grid w-full rounded-lg bg-white shadow grid-cols-2 grid-rows-6">
                <div className="p-4 flex items-center border-b border-gray-200 w-full text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tl-lg bg-gray-50">
                  Data
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tr-lg bg-gray-50">
                  Information
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Company
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Signia
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Category
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  In The Ear (ITE)
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Problem Highlight/Issue
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Nothing
                </div>

                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Issue Resolved
                </div>
                <div className="p-4 flex justify-between items-center border-b w-full border-gray-200 text-green-700 text-sm uppercase font-normal leading-150 bg-white">
                  Yes
                  <Popover className="relative">
                    <Popover.Button className="focus-visible:outline-none z-10">
                      <Badge
                        color="success"
                        className="rounded-md normal-case"
                        icon={editOutline}
                      >
                        Change
                      </Badge>
                    </Popover.Button>

                    <Popover.Panel className="absolute z-20 mt-3  w-[150px] -translate-x-1/2 transform px-4 sm:px-0">
                      <div className="overflow-hidden z-[200] rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative flex flex-col gap-7 p-4 bg-white">
                          <button className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                            Yes
                          </button>
                          <button className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                            No
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>

                <div className="p-4 flex items-center rounded-bl-lg border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Status
                </div>
                <div className="p-4 flex items-center rounded-br-lg  justify-between border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  <Badge
                    color="info"
                    className="normal-case rounded-md"
                    size={"sm"}
                  >
                    Collected
                  </Badge>

                  <Popover className="relative">
                    <Popover.Button className="focus-visible:outline-none z-10">
                      <Badge
                        color="success"
                        className="rounded-md normal-case"
                        icon={editOutline}
                      >
                        Change Status
                      </Badge>
                    </Popover.Button>

                    <Popover.Panel className="absolute z-20 mt-3  w-[150px] -translate-x-1/2 transform px-4 sm:px-0">
                      <div className="overflow-hidden z-[200] rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative flex flex-col gap-7 p-4 bg-white">
                          <button className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                            Collected
                          </button>
                          <button className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                            Not Collected
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Remark
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                defaultValue={""}
              />
              <p className="text-gray-500 my-3 text-xs leading-150">
                A note for extra info
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Max. File Size: 30MB
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="w-full flex items-start gap-[39px] flex-col">
            <div className="flex justify-between w-full flex-col gap-5 items-start">
              <h4 className="text-gray-900 leading-[2.5rem] text-base font-medium">
                Edit History
              </h4>
              <div className="grid w-full grid-cols-2 shadow rounded-lg grid-rows-3 ">
                <div className="p-4 flex items-center border-b border-gray-200 w-full text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tl-lg bg-gray-50">
                  Data Edited{" "}
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tr-lg bg-gray-50">
                  By Whom
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Contact Info
                </div>
                <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Snehakumar Singh (14 April, 05:20 PM)
                </div>
                <div className="p-4 flex items-center border-b w-full rounded-bl-lg border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                  Marked as Complete
                </div>
                <div className="p-4 flex items-center border-b w-full rounded-br-lg border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                  Snehakumar Singh (14 April, 05:20 PM)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
