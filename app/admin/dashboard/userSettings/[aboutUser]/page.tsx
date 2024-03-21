"use client";
import { Breadcrumb, Button } from "flowbite-react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import Pdf from "@/public/icons/icons/pdf";
import Download from "@/public/icons/icons/download";
import TabsTable from "./_components/TabsTable/TabsTable";
import { FiEdit } from "react-icons/fi";
import EditProfileDrawer from "./_components/EditProfileDrawer/EditProfileDrawer";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import RedModals from "@/components/Modals/RedModals/RedModals";

export default function consultancies() {
  const [DrawerVisible, actions] = useStamina({
    initialState: {
      DrawerVisible: false,
    },
    actions: {
      openDrawer(v: { DrawerVisible: boolean }) {
        v.DrawerVisible = true;
      },
      closeDrawer(v: { DrawerVisible: boolean }) {
        v.DrawerVisible = false;
      },
    },
  });
  const [openModal, action] = useStamina({
    initialState: {
      openModal: false,
    },
    actions: {
      openModal(v) {
        v.openModal = true;
      },
      closeModal(v) {
        v.openModal = false;
      },
    },
  });
  return (
    <>
      <EditProfileDrawer
        openDrawer={DrawerVisible.DrawerVisible}
        closeDrawer={actions.closeDrawer}
      />
      <section className="relative w-full overflow-auto">
        <div className="w-full p-8 pb-[39px] sticky top-0 z-20 bg-white  flex justify-between items-center">
          <div className="flex justify-between  items-center w-full">
            <Breadcrumb className="bg-gray-50 px-5 py-3  dark:bg-gray-800 ">
              <Breadcrumb.Item href="#" icon={FaClipboardCheck}>
                User Settings
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">About Users</Breadcrumb.Item>
            </Breadcrumb>
            <div className="gap-3  flex items-center">
              <Button
                onClick={actions.openDrawer}
                style={{ height: "fit-content" }}
                size={"md"}
                color="blue"
              >
                <span className="mr-1">
                  <FiEdit />
                </span>
                Edit
              </Button>

              <Button
                onClick={action.openModal}
                style={{ height: "fit-content" }}
                size={"md"}
                color="failure"
              >
                <span className="mr-1">
                  <AiOutlineClose />
                </span>
                REMOVE EMPLOYEE
              </Button>
            </div>
          </div>
        </div>
        <div className="p-8 w-full pt-0 gap-[39px] z-20 flex flex-col">
          <h6 className="text-2xl text-black font-bold leading-150">
            ID <span className="text-gray-500">(#224569)</span>
          </h6>
          <div className="flex gap-6 w-full">
            <div
              id="card"
              className="flex p-8 shadow-md gap-5 rounded-lg border border-gray-200 flex-col items-center w-full"
            >
              <div className="flex justify-center items-start gap-5 w-full">
                <Image
                  alt="profile"
                  style={{ objectFit: "contain", borderRadius: "6px" }}
                  width={136}
                  height={136}
                  src={"https://placehold.co/136x136/png"}
                />
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center justify-between gap-2 w-full">
                    <h4 className="text-gray-900 font-extrabold text-3xl leading-125">
                      Dr Sudheer Pandey
                    </h4>
                    <h3 className="text-gray-500 text-right leading-150 font-normal text-lg">
                      ADMIN
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 w-full">
                    <h4 className="text-gray-500  text-lg leading-150">Male</h4>
                    <h3 className="text-gray-500 text-right leading-150 font-normal text-lg">
                      Age 48
                    </h3>
                  </div>
                  <Link
                    className="flex items-center gap-1 text-base font-medium leading-150 text-blue-700"
                    href="tel:5551234567"
                  >
                    <BsTelephoneFill />
                    +91 7600735443
                  </Link>
                  <Link
                    className="flex items-center gap-1 text-base font-medium leading-150 text-blue-700"
                    href="mailto:nitambani@gmail.com"
                  >
                    <FaMessage />
                    nitambani@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 w-full">
                <h4 className="text-gray-800 text-lg leading-150">
                  Date of Joining
                </h4>
                <p className="text-gray-500 text-lg font-normal leading-150">
                  11 March, 2023, 9:30 am
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-1/3">
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
          <TabsTable />
        </div>
      </section>
      <RedModals
        openModal={openModal.openModal}
        setOpenModal={action.closeModal}
        redButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        redBtnLoading={false}
        title={""}
        from={""}
      />
    </>
  );
}
