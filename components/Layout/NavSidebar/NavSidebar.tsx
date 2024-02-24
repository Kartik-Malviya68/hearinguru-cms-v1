"use clinet";

import { Sidebar } from "flowbite-react";
import React from "react";
import logo from "@/public/icons/Logo.svg";

import Image from "next/image";
import {
  book,
  chart,
  clipboard,
  cog,
  desktop,
  questionMark,
  user,
} from "@/public/icons/Dashboard";

function NavSidebar() {
  return (
    <div className="h-screen border-r border-gray-200  sticky">
      <div className="relative w-full h-[76px]">
        <Image src={logo} alt="logo" sizes="auto" fill />
      </div>
      <Sidebar style={{ backgroundColor: "white", height: "auto" }}>
        <Sidebar.Items style={{ backgroundColor: "white" }}>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={chart}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/consultancies"
              icon={clipboard}
            >
              Consultancies
            </Sidebar.Item>
            <Sidebar.Collapse icon={desktop} label="Manage Website">
              <Sidebar.Item href="/admin/dashboard/manageWebsite/blogs">Blogs</Sidebar.Item>
              <Sidebar.Item href="#">E-Commerce</Sidebar.Item>
              <Sidebar.Item href="#">Hearing test</Sidebar.Item>
              <Sidebar.Item href="#">FAQ’s</Sidebar.Item>
              <Sidebar.Item href="#">Query</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="/admin/dashboard/userSettings" icon={book}>
              User Settings
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard/myProfile" icon={user}>
              My Profile
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/settings" icon={cog}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={questionMark}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default NavSidebar;
