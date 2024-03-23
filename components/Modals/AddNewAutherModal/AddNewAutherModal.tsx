import { Dialog, Transition } from "@headlessui/react";
import { Button } from "flowbite-react";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddNewAutherModalProps {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
}

interface AddNewAuther {
  autherName: string;
  aboutAuther: string;
}
export default function AddNewAutherModal(props: AddNewAutherModalProps) {
  const { isOpen, closeModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewAuther>();

  const onSubmit: SubmitHandler<AddNewAuther> = (data) => {
    console.log(data);
    closeModal(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1400]" onClose={closeModal}>
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
                    Add New Auther
                  </h2>
                  <div className="w-full">
                    <label
                      htmlFor="Author Name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Author Name
                    </label>
                    <input
                      {...register("autherName", {
                        required: "Please enter author name",
                      })}
                      type="text"
                      id="Author Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Author Name"
                    />
                    {errors.autherName && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors.autherName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <div className=" mb-2 flex w-full justify-between items-center">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                        About Author
                      </h5>
                      <p className="text-gray-500 text-xs leading-150">
                        A note for extra info
                      </p>
                    </div>

                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <div className="px-4 overflow-hidden rounded-lg py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">
                          Your comment
                        </label>
                        <textarea
                          id="comment"
                          {...register("aboutAuther", {
                            required: "Please enter about author",
                          })}
                          rows={4}
                          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Write text here ..."
                          defaultValue={""}
                        />
                        {errors.aboutAuther && (
                          <p className="text-red-500 mt-1 text-xs">
                            {errors.aboutAuther.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    fullSized
                    color="blue"
                    size={"md"}
                  >
                    Create Auther
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
