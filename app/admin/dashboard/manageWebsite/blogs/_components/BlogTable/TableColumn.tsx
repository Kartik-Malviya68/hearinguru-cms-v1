import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "flowbite-react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const columnHelper = createColumnHelper<BlogTypes.BlogTable>();

import React from "react";

const columns = () => {
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
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={row.getIsSelected()}
            onChange={(value) => {
              row.toggleSelected(!!value);
            }}
            color={"blue"}
          />
        );
      },
      header: ({ table }) => {
        return (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onChange={(value) => table.toggleAllRowsSelected(!!value)}
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
            <div className="relative w-[110px] h-[42px]">
              <Image
                onClick={()=> {
                  setSelected(info.getValue().toString()),
                  openModal()
                  console.log(selected)
                }}
                alt="blogImg"
                style={{ borderRadius: "5px", objectFit: "cover" , cursor: "pointer"}}
                layout="fill"
                src={info.getValue() as string}
              ></Image>
            </div>
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
