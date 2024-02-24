// import { privacyPolicy, termsAndCondition } from "@/constant";
import { List } from "flowbite-react";
import React from "react";

function LegalCard() {
  return (
    <div className="flex w-full lg:w-[848px] flex-col items-start justify-center gap-3 md:rounded-[9px] border border-gray-200">
      <div className="flex p-4 flex-col items-start gap-1 rounded-lg bg-white w-full">
        <h4 className="text-lg font-medium leading-7 text-gray-900">
          Terms & Conditions
        </h4>
        {/* {termsAndCondition.map((list) => (
          <List  key={list.id} className="text-sm font-normal text-gray-500">
          <List.Item>{list.list}</List.Item>
        </List>
        ))} */}
      </div>
      <div className="flex p-4 flex-col items-start gap-1 rounded-lg bg-white w-full">
        <h4 className="text-lg font-medium leading-7 text-gray-900">
        Privacy Policy
        </h4>
        {/* {privacyPolicy.map((list) => (
          <List  key={list.id} className="text-sm font-normal text-gray-500">
          <List.Item>{list.list}</List.Item>
        </List>
        ))} */}
      </div>
    </div>
  );
}

export default LegalCard;
