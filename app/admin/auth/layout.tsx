"use client";

import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <section className="h-screen flex flex-col justify-between w-full">
        {children}
        <div className="flex w-full py-5 px-7 justify-between items-center">
          <HearinguruAdminLogo/>
          <h4 className="text-neutral-600 font-normal text-sm">Copyright © 2024 HearinGuru | All Rights Reserved </h4>
        </div>
      </section>  
    </main>
  );
}
