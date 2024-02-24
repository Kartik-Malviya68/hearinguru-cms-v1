import { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      light:
        "text-gray-800 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
      CTA: "bg-CTA hover:bg-blue-700 text-white",
      ChangeStatus:
        "bg-white border focus:ring-0 overflow-visible border-gray-200 hover:bg-gray-50",
      Dropdown:
        "bg-white focus:border-blue-6 text-gray-500 border border-gray-200 rounded-[5px]",
    },
  },
  badge: {
    icon: {
      size: {
        xs: "w-[14px] h-[14px]",
      },
    },
  },
  datepicker: {
    root: {
      input: {
        field: {
          input: {
            base: "bg-gray-50 w-full border border-gray-300 text-gray-500",
          },
        },
      },
    },
  },
  sidebar: {
    root: {
      inner:
        "overflow-y-auto overflow-x-hidden  bg-white py-4 px-3 dark:bg-gray-800",
    },
  },
  table: {
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "px-6 py-4 bg-gray-50",
      },
    },
  },
  breadcrumb: {
    root: {
      base: "rounded-lg border border-gray-200",
    },
  },
  pagination: {
    base: "flex items-center justify-between",

    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      selector: {
        active: "bg-[#E1EFFE] text-blue-600 dark:text-white",
      },
    },
  },
  navbar: {
    root: {
      base: "p-6",
    },

    link: {
      base: "block py-2 pr-4 pl-3 text-gray-900 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-gray-900",
        off: "border-b border-gray-100  text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:md:text-gray-900 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
  },
};
