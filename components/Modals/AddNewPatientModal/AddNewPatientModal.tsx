import { Dialog, Transition } from "@headlessui/react";
import { Button } from "flowbite-react";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddNewPatientModalProps {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
}

interface AddNewPatien {
  name: string;
  patientId: string; // 5 len, 0-9 a-z
  age: number;
  gender: "MALE" | "FEMALE";
  phone: string;
  email?: string;
  pincode: number;
  address?: string;
}
function AddNewPatientModal(props: AddNewPatientModalProps) {
  const { isOpen, closeModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewPatien>();

  const onSubmit: SubmitHandler<AddNewPatien> = (data) => {
    console.log(data);
    closeModal(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full   max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="gap-3 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Add New Patient
                  </h2>
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Name
                    </label>
                    <input
                      {...register("name", { required: "Please enter a name" })}
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient Name Here"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="patientId"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient ID
                    </label>
                    <input
                      {...register("patientId", {
                        required: "Please enter a patient ID",
                        pattern: {
                          value: /^[a-z0-9]{5}$/,
                          message: "Please enter a valid patient ID",
                        },
                      })}
                      type="text"
                      id="patientId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient ID Here"
                    />
                    {errors.patientId && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.patientId.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Age
                    </label>
                    <input
                      {...register("age", {
                        required: "Please enter a age",
                        pattern: {
                          value: /^[0-9]{1,3}$/,
                          message: "Please enter a valid age",
                        },
                      })}
                      type="text"
                      inputMode="numeric"
                      id="age"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient Age Here"
                    />
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Gender
                    </label>
                    <select
                      {...register("gender", {
                        required: "Please select gender",
                      })}
                      id="age"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled selected value={""}>
                        Select Patient Gender
                      </option>
                      <option value={"MALE"}>Male</option>
                      <option value={"FEMALE"}>Female</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="Number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Phone Number
                    </label>
                    <input
                      {...register("phone", {
                        required: "Please enter a phone number",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      type="text"
                      id="Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient Phone Number Here"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Email
                    </label>
                    <input
                      {...register("email", {
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient Email Here"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient Pincode
                    </label>
                    <input
                      {...register("pincode", {
                        required: "Please enter a pincode",
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "Please enter a valid pincode",
                        },
                      })}
                      type="pincode"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Patient Pincode Here"
                    />
                    {errors.pincode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pincode.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Patient address
                    </label>
                    <textarea
                      {...register("address", {})}
                      id="address"
                      rows={4}
                      className="w-full mb-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Enter Write Address Here"
                      defaultValue={""}
                    />
                  </div>
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    fullSized
                    color="blue"
                    size={"md"}
                  >
                    Create Patient
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AddNewPatientModal;
