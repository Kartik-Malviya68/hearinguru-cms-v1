"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { ChartMixed } from "@/public/icons/Dashboard";

function NavigationBar() {
  return (
    <Navbar className="w-full bg-white text-gray-900" fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link className="" href="#" active>
          Messages
        </Navbar.Link>
        <Navbar.Link href="#">Notification</Navbar.Link>
      </Navbar.Collapse>
      <div>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-5 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.05882 14C3.47329 14 3 14.448 3 15V20C3 20.552 3.47329 21 4.05882 21C4.64435 21 5.11765 20.552 5.11765 20V15C5.11765 14.448 4.64435 14 4.05882 14Z"
                fill="#1F2A37"
              />
              <path
                d="M9.35294 9.99994C8.76741 9.99994 8.29412 10.4479 8.29412 10.9999V20C8.29412 20.552 8.76741 21 9.35294 21C9.93847 21 10.4118 20.552 10.4118 20V10.9999C10.4118 10.4479 9.93847 9.99994 9.35294 9.99994Z"
                fill="#1F2A37"
              />
              <path
                d="M14.6471 14C14.0615 14 13.5882 14.448 13.5882 15V20C13.5882 20.552 14.0615 21 14.6471 21C15.2326 21 15.7059 20.552 15.7059 20V15C15.7059 14.448 15.2326 14 14.6471 14Z"
                fill="#1F2A37"
              />
              <path
                d="M19.9412 9.99994C19.3556 9.99994 18.8824 10.4479 18.8824 10.9999V20C18.8824 20.552 19.3556 21 19.9412 21C20.5267 21 21 20.552 21 20V10.9999C21 10.4479 20.5267 9.99994 19.9412 9.99994Z"
                fill="#1F2A37"
              />
              <path
                d="M4.05776 10.9999C4.36165 10.9999 4.66235 10.8769 4.87306 10.6399L9.35294 5.56192L13.8328 10.6399C14.2362 11.096 15.0568 11.096 15.4602 10.6399L20.7544 4.63992C21.1292 4.21592 21.0678 3.58491 20.6188 3.23191C20.1678 2.87791 19.5018 2.93591 19.1269 3.35991L14.6471 8.43794L10.1672 3.35991C9.76377 2.90391 8.94318 2.90391 8.53977 3.35991L3.24565 9.35994C2.87082 9.78394 2.93224 10.4149 3.38118 10.7679C3.57918 10.9239 3.81847 10.9999 4.05776 10.9999Z"
                fill="#1F2A37"
              />
            </svg>

            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <p className="text-blue-600 text-sm font-medium">Logout</p>
        </div>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
