"use client";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";
import React, { useState } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
export default function consultancies() {
  const [rAndM, setRAndM] = useState(false);
  return (
    <>
      <section className="relative w-full overflow-auto">
        <div className="w-full p-8 pb-[39px] sticky top-0 z-20 bg-white  flex justify-between items-center">
          <div className="flex justify-between  items-center w-full">
            <Breadcrumb className="bg-gray-50 px-5 py-3  dark:bg-gray-800 ">
              <Breadcrumb.Item href="#" icon={FaClipboardCheck}>
                Consultancies
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                Add New Consultancy to Existing
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="gap-3 w-[464px] flex items-center">
              <Button color="light" fullSized size={"md"} outline>
                Cancel
              </Button>
              <Button color="blue" fullSized size={"md"}>
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="p-8 w-full pt-0 z-20 flex flex-col">
          <form className="w-full gap-[39px] flex flex-col">
            <div className="flex w-[668px] z-10 p-4 flex-col items-start gap-4 bg-white">
              <div
                id="heading"
                className="flex items-center w-full justify-between"
              >
                <h4 className="text-gray-500 leading-150 uppercase font-semibold">
                  Add New Consultancy
                </h4>
                <IoClose />
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
                  onChange={(e) =>
                    e.target.value === "Repair and Maintenance"
                      ? setRAndM(true)
                      : setRAndM(false)
                  }
                  id="ConsultationType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected value="US">
                    Select Type
                  </option>
                  <option value="Repair and Maintenance">
                    Repair and Maintenance
                  </option>
                  <option value="Appointment">Appointment</option>
                  <option value="Warranty & Exchange">
                    Warranty & Exchange
                  </option>
                </select>
              </div>
              {rAndM && (
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
                      <option value="Warranty & Exchange">
                        Warranty & Exchange
                      </option>
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
                      <option value="Warranty & Exchange">
                        Warranty & Exchange
                      </option>
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
                      <option value="Warranty & Exchange">
                        Warranty & Exchange
                      </option>
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
                      <option value="Warranty & Exchange">
                        Warranty & Exchange
                      </option>
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
              )}
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
                  htmlFor="Email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search for nearby Clinics
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <IoIosSearch />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search ID, Type, Name, Number..."
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="Slotdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Slot date
                </label>
                <Datepicker color={"blue"} />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Slotdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Slot date
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
          </form>
        </div>
      </section>
    </>
  );
}
