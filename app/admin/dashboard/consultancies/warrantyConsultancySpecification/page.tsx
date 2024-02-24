"use client";

import { editOutline } from "@/public/icons/icons";
import { Badge, Breadcrumb, Button, Dropdown } from "flowbite-react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
function page() {
  return (
    <section className="relative w-full overflow-auto">
      <div className="w-full flex-col p-8 pb-0 sticky top-0 z-20 bg-white  flex justify-between items-center">
        <div className="flex justify-between  items-center w-full">
          <Breadcrumb className="bg-gray-50 px-5 py-3  dark:bg-gray-800 ">
            <Breadcrumb.Item href="#" icon={FaClipboardCheck}>
              Consultancies
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              warranty consultancy specification
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
              <h4 className="text-gray-900 text-base leading-6 font-medium">
                Consultation Appointment Specification
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                Warranty & Exchange
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
                Battery Damage
              </div>

              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                Issue Resolved
              </div>
              <div className="p-4 flex justify-between items-center border-b w-full border-gray-200 text-green-700 text-sm uppercase font-normal leading-150 bg-white">
                Yes
                <Badge
                  color="success"
                  className="rounded-md normal-case"
                  icon={editOutline}
                >
                  Change
                </Badge>
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
                Entry Information
              </h4>
            </div>
            <div className="grid w-full rounded-lg bg-white shadow grid-cols-2 grid-rows-4">
              <div className="p-4 flex items-center border-b border-gray-200 w-full text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tl-lg bg-gray-50">
                Data
              </div>
              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-xs uppercase font-semibold leading-150 rounded-tr-lg bg-gray-50">
                Information
              </div>
              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                Mode
              </div>
              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                Offline
              </div>
              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                Created By
              </div>
              <div className="p-4 flex items-center border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                Sanjay Parmar (Sales Department)
              </div>
              <div className="p-4 flex items-center rounded-bl-lg border-b w-full border-gray-200 text-gray-900 text-sm uppercase font-normal leading-150 bg-gray-50">
                Date & Time Creation
              </div>
              <div className="p-4 flex items-center rounded-br-lg border-b w-full border-gray-200 text-gray-500 text-sm uppercase font-normal leading-150 bg-white">
                Apr 21, 2024 / 14:20 PM
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
        </div>
        <div className="w-full flex items-start gap-[39px] flex-col">
          <div className="flex justify-between w-full flex-col gap-5 items-start">
            <h4 className="text-gray-900 text-base leading-6 font-medium">
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
  );
}

export default page;
