"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import logo from "@/public/Logo/Logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
export default function Home() {
  return (
    <React.Fragment>
      <motion.section
        style={{
          height: "100vh",
          background: "linear-gradient(180deg, #FFF  0%, #FFF9F6  100%)",
        }}
        className="h-full flex justify-center items-center w-full"
        // 		animate={{
        // 			y: -1000,
        // 		}}
        // 		transition={{
        // 			delay: 2,
        //   duration: 0.5
        // 		}}
      >
        <HearinguruAdminLogo className="scale-[3.5]" />

        <h1 className="absolute text-gray-500 bottom-12 text-sm vsm:text-2xl leading-9 font-medium">
          Admin Portal. Only for authorized staff
        </h1>
      </motion.section>
    </React.Fragment>
  );
}
