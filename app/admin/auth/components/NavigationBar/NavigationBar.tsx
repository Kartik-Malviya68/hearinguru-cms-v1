'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    name: string;
    }
function NavigationBar( props: Props ) {
    const{ name  } = props
    const router = useRouter();
  return (
    <nav
        style={{
          boxShadow: "0px -1px 0px 0px rgba(0, 0, 0, 0.15) inset",
        }}
        className="flex py-4 px-6 items-center justify-start gap-[10px] w-full bg-white z-10"
      >
        <div
          onClick={() => router.back()}
          className="text-[#0d0d0d] group hover:text-gray-500 flex cursor-pointer items-center text-base gap-[10px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_1408_789"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="0"
              width="12"
              height="20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4569 0.783155C15.9586 1.27129 15.9586 2.06272 15.4569 2.55085L7.80067 10L15.4569 17.4492C15.9586 17.9373 15.9586 18.7287 15.4569 19.2169C14.9552 19.705 14.1418 19.705 13.6401 19.2169L4.16699 10L13.6401 0.783155C14.1418 0.295019 14.9552 0.295019 15.4569 0.783155Z"
                fill="#187CFF"
              />
            </mask>
            <g mask="url(#mask0_1408_789)">
              <rect
                x="0.000488281"
                y="-0.00115967"
                width="19.9992"
                height="19.9992"
                className="fill-[#0d0d0d] group-hover:fill-gray-500"
              />
            </g>
          </svg>
          {name}
        </div>
      </nav>
  );
}

export default NavigationBar;
