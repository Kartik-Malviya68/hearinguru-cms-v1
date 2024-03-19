"use client";
import { Breadcrumb, Button, Datepicker } from "flowbite-react";
import React, { useState } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import useHandleAsync from "@/modules/StateManagement/useHandleAsync/useHandleAsync";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import createConsultancie from "../_fetch/services/createConsultancy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const date = selectedDate.toISOString().slice(0, 10);
  const convertedDate = `${date}T${selectedTime}`;
  const [show, actions] = useStamina({
    initialState: {
      show: false,
    },

    actions: {
      setShow(v) {
        v.show = true;
      },
      setHide(v) {
        v.show = false;
      },
    },
  });
  const router = useRouter();
  console.log(show);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    getValues,
  } = useForm<ConsultancyTypes.AddNewConsultancy>({});

  const [xState, loading, fetcher] = useHandleAsync(createConsultancie, {
    onSuccess: () => {
      toast("Consultancy Created Successfully", { type: "success" });
    },
  });

  console.log(loading);
  const onSubmit: SubmitHandler<ConsultancyTypes.AddNewConsultancy> = (
    data
  ) => {
    try {
      const date = getValues("slot.date");
      const time = getValues("slot.time");
      const mergedDate = `${date}T${time}`;
      // console.log(date, "date");
      // console.log(xState, "xstate");

      fetcher({
        ...data,

        slot: {
          dateTime: new Date(mergedDate),
        },
      });
    } catch (error) {
      console.log(error);
    }

    // getValues().consultancyDetails.type === "repair and maintenance" &&
    //   router.push(
    //     "/admin/dashboard/consultancies/repairConsultancySpecification"
    //   );
    // getValues().consultancyDetails.type === "appointment" &&
    //   router.push("/admin/dashboard/consultancies/appointmentSpecification");
    // getValues().consultancyDetails.type === "warranty & exchange" &&
    //   router.push(
    //     "/admin/dashboard/consultancies/warrantyConsultancySpecification"
    //   );
    console.log(data, "data");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full overflow-auto"
    >
      <ToastContainer />
      <div className="w-full p-8 pb-[39px] sticky top-0 z-20 bg-white  flex justify-between items-center">
        <div className="flex justify-between  items-center w-full">
          <Breadcrumb className="bg-gray-50 px-5 py-3  dark:bg-gray-800 ">
            <Breadcrumb.Item href="#" icon={FaClipboardCheck}>
              Consultancies
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Add New Consultancy</Breadcrumb.Item>
          </Breadcrumb>
          <div className="gap-3 w-[464px] flex items-center">
            <Button color="light" fullSized size={"md"} outline>
              Cancel
            </Button>
            <Button
              type="submit"
              isProcessing={loading.isLoading()}
              color="blue"
              fullSized
              size={"md"}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <div className="p-8 w-full pt-0 z-20 flex flex-col">
        <div className="w-full gap-[39px] flex flex-col">
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
                {...register("patientDetails.name", {
                  required: "Please enter your name",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add Name"
              />
              {errors.patientDetails?.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.patientDetails.name.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="ConsultationType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Consultation Type
              </label>
              <select
                {...register("consultancyDetails.type", {
                  required: "Please select a type",
                })}
                onChange={(e) =>
                  e.target.value !== "appointment"
                    ? actions.setShow()
                    : actions.setHide()
                }
                id="ConsultationType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value="">
                  Select Type
                </option>
                <option value="repair and maintenance">
                  Repair and Maintenance
                </option>
                <option value="appointment">Appointment</option>
                <option value="warranty & exchange">Warranty & Exchange</option>
              </select>
              {errors.consultancyDetails?.type && (
                <p className="text-red-500 text-xs mt-1">
                  Please Select a Consultation Type
                </p>
              )}
            </div>
            {show.show && (
              <div className="flex p-3 flex-col items-start gap-3 w-full border border-gray-300 rounded-2xl">
                <div className="w-full">
                  <label
                    htmlFor="SelectHearingAidCompany"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Hearing Aid Company
                  </label>
                  <select
                    {...register("consultancyDetails.specification.company", {
                      required: "Please select a company",
                    })}
                    id="SelectHearingAidCompany"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Select Hearing Aid Company
                    </option>
                    <option value="Oticon">Oticon</option>
                    <option value="Starkley">Starkley</option>
                    <option value="Phonak">Phonak</option>
                    <option value="Resound">Resound</option>
                    <option value="Siemens">Siemens</option>
                    <option value="Widex">Widex</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.consultancyDetails?.specification?.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.consultancyDetails.specification.company.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="SelectHearingAidCompany"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Hearing Aid Category
                  </label>
                  <select
                    {...register(
                      "consultancyDetails.specification.hearingAidCategory",
                      {
                        required: "Please select a category",
                      }
                    )}
                    id="SelectHearingAidCategory"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Select Hearing Aid Category
                    </option>
                    <option value="Behind The Ear (BTE)">
                      Behind The Ear (BTE)
                    </option>
                    <option value="In The Ear (ITE)">In The Ear (ITE)</option>
                    <option value="Completely In The Canal (CIC)">
                      Completely In The Canal (CIC)
                    </option>
                    <option value="Receiver In The Ear (RITE)">
                      Receiver In The Ear (RITE)
                    </option>
                    <option value="Invisible In Canal (IIC)">
                      Invisible In Canal (IIC)
                    </option>
                    <option value="Pocket">Pocket</option>
                    <option value="Invisible">Invisible</option>
                    <option value="Don’t Know For Now">
                      Don’t Know For Now
                    </option>
                  </select>
                  {errors.consultancyDetails?.specification
                    ?.hearingAidCategory && (
                    <p className="text-red-500 text-xs mt-1">
                      {
                        errors.consultancyDetails.specification
                          .hearingAidCategory.message
                      }
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="SelectIssue"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Issue
                  </label>
                  <select
                    {...register("consultancyDetails.specification.issue", {
                      required: "Please select an issue",
                    })}
                    id="SelectIssue"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Select Hearing Aid Issue
                    </option>
                    <option value="Fixing Battery Doors">
                      Fixing Battery Doors
                    </option>
                    <option value="Ear Buds Replacement">
                      Ear Buds Replacement
                    </option>
                    <option value="Extensive Deep Cleaning">
                      Extensive Deep Cleaning
                    </option>
                    <option value="Re-Circuitry">Re-Circuitry</option>
                    <option value="Fixing Holes">Fixing Holes</option>
                    <option value="Addition of Extraction Cords">
                      Addition of Extraction Cords
                    </option>
                    <option value="Reprograming">Reprograming</option>
                    <option value="ON/OFF Switch Not Working">
                      ON/OFF Switch Not Working
                    </option>
                    <option value="I Don’t Know">I Don’t Know</option>
                  </select>
                  {errors.consultancyDetails?.specification?.issue && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.consultancyDetails?.specification?.issue.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="SelectStatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select status
                  </label>
                  <select
                    {...register("consultancyDetails.specification.status", {
                      required: "Please select a status",
                    })}
                    id="Select Status"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Select Hearing Aid Status
                    </option>
                    <option value="pending">Pending</option>
                    <option value="converted">converted</option>
                    <option value="not-converted">not-converted</option>
                  </select>
                  {errors.consultancyDetails?.specification?.status && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.consultancyDetails?.specification?.status.message}
                    </p>
                  )}
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
                        {...register(
                          "consultancyDetails.specification.issueDetails",
                          {
                            required: "Please enter a message",
                          }
                        )}
                        id="comment"
                        rows={4}
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write text here ..."
                        defaultValue={""}
                      />
                      {errors.consultancyDetails?.specification
                        ?.issueDetails && (
                        <p className="text-red-500 text-xs mt-1">
                          {
                            errors.consultancyDetails?.specification
                              ?.issueDetails.message
                          }
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button
                        type="submit"
                        className="inline-flex hidden items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
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
                {...register(
                  "patientDetails.phoneNumber",

                  {
                    required: "Please enter a contact number",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid contact number",
                    },
                  }
                )}
                type="text"
                id="ContactNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+91 Mobile Number"
              />
              {errors.patientDetails?.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.patientDetails?.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                {...register("patientDetails.email", {
                  required: "Please enter an email",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="text"
                id="EmailAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email here"
              />
              {errors.patientDetails?.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.patientDetails.email.message}
                </p>
              )}
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
              <Controller
                control={control}
                name="slot.date"
                rules={{ required: "Please select a date" }}
                render={({ field }) => (
                  <Datepicker
                    defaultDate={selectedDate}
                    onSelectedDateChanged={(date) => {
                      field.onChange(date.toISOString().slice(0, 10));
                    }}
                  />
                )}
              />
              {/* <Datepicker
                defaultDate={selectedDate}
                onSelectedDateChanged={(date) => {
                  setSelectedDate(date);
                }}
              /> */}

              {errors.slot?.date && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.slot?.date.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="Slotdate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Slot Time
              </label>
              <select
                {...register("slot.time", {
                  required: "Please select a time",
                })}
                id="Select Status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected value={""}>
                  Select Time
                </option>
                <option value={"06:30:00.000Z"}>12:00 AM</option>
                <option value={"09:30:00.000Z"}>03:00 PM</option>
                <option value={"12:30:00.000Z"}>06:00 PM</option>
              </select>
              {errors.slot?.time && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.slot?.time.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="Status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                {...register("status", {
                  required: "Please select a status",
                })}
                id="Status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value={""}>
                  Select status
                </option>
                <option value="pending">pending</option>
                <option value="converted">converted</option>
                <option value="not-converted">not-converted</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.status.message}
                </p>
              )}
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
                    {...register("consultancyDetails.message", {
                      required: true,
                    })}
                    id="comment"
                    rows={4}
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write text here ..."
                    defaultValue={""}
                  />
                  {errors.consultancyDetails?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter a message
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex hidden items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
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
        </div>
      </div>
    </form>
  );
}
