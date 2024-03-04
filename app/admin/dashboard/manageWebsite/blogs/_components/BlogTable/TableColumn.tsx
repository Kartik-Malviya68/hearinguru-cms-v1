import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "flowbite-react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const imagePopoverLinks = [
  {
    title: "View Blog",
    link: "",
    onClick: () => {},
  },
  {
    title: "Edit Details",
    link: "",
    onClick: () => {},
  },
  {
    title: "View Image",
    link: "",
    onClick: () => {},
  },
];

const columnHelper = createColumnHelper<BlogTypes.BlogTable>();
import React from "react";
import Link from "next/link";

const columns = ({ setChecked }: { setChecked: (e: any) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const columnsLayout = [
    columnHelper.display({
      id: "select",
      header: ({ table }) => {
        return (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onChange={(value) => {
              table.toggleAllPageRowsSelected(value.target.checked);
              setChecked(value.target.checked);
            }}
            color={"blue"}
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={row.getIsSelected()}
            onChange={(value) => {
              row.toggleSelected(value.target.checked);
              setChecked(value.target.checked);
            }}
            color={"blue"}
          />
        );
      },

      enableSorting: false,
      enableHiding: false,
    }),
    columnHelper.accessor("title", {
      header: () => "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("slug", {
      header: () => "Slug",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: () => "Date",
      cell: (info) => info.getValue().toLocaleString("en-IN"),
    }),
    columnHelper.accessor("category", {
      header: () => "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("mainImage", {
      header: () => "Main Image",
      cell: (info) => {
        return (
          <>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <div className="relative w-[110px] h-[42px]">
                      <Image
                        // onClick={() => {
                        //   setSelected(info.getValue().toString()), openModal();
                        //   console.log(selected);
                        // }}
                        alt="blogImg"
                        style={{
                          borderRadius: "5px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        layout="fill"
                        src={info.getValue() as string}
                      />
                    </div>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  z-10 mt-3  w-[150px] -translate-x-1/2 transform px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative flex flex-col gap-7 p-4 bg-white">
                          
                          <Link
                            href=""
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                          >
                            View Blog
                          </Link>
                          <Link
                            href=""
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                          >
                            Edit Details
                          </Link>
                          <Link
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                            href=""
                            onClick={() => {
                              setSelected(info.getValue().toString()),
                                openModal();
                              console.log(selected);
                            }}
                          >
                            View Image
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                      <Dialog.Panel className=" max-w-[900px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="w-[800px] h-[500px] relative">
                          <Image
                            onClick={openModal}
                            alt="blogImg"
                            style={{ borderRadius: "5px", objectFit: "cover" }}
                            layout="fill"
                            src={selected}
                            quality={100}
                          ></Image>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        );
      },
    }),
  ];
  return columnsLayout;
};

export default columns;
