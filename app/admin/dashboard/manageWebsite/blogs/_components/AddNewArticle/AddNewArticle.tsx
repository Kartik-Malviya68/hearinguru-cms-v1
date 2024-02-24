import { Drawer } from "@mui/material";
import { Button, Datepicker } from "flowbite-react";
import React from "react";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";

import { IoClose } from "react-icons/io5";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface Props {
  closeDrawer: () => void;
  openDrawer: boolean;
}

function AddNewArticle(props: Props) {
  const { closeDrawer, openDrawer } = props;
  const [image, actions, ms] = useStamina<{
    image: string | ArrayBuffer | null | undefined;
  }>({
    initialState: {
      image: "",
    },

    actions: {},
  });

  const setImage = (src: string | ArrayBuffer | null | undefined) => {
    ms((v) => (v.image = src));
  };

  const handleFileImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = (r) => {
      setImage(r.target?.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  console.log(image);
  return (
    <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
      <div className="w-[706px]  flex pt-0 p-4 flex-col items-start gap-8 ">
        <div
          id="heading"
          className="flex gap-2 sticky top-0  bg-white py-4 z-20 items-center w-full justify-between"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full">
            <IoClose className="cursor-pointer" onClick={closeDrawer} />
          </div>
          <h4 className="text-gray-500 w-full leading-150 uppercase font-semibold">
            Blog Item
          </h4>

          <Button color="light" fullSized size={"sm"} outline>
            Cancel
          </Button>
          <Button color="failure" fullSized size={"sm"}>
            Cancel
          </Button>
          <Button color="blue" fullSized size={"sm"}>
            Confirm Changes
          </Button>
        </div>
        <div className="w-full">
          <label
            htmlFor="Title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="Subtitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subtitle
          </label>
          <input
            type="text"
            id="Subtitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter subtitle"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="Slug"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Slug
          </label>
          <input
            type="Slug"
            id="EmailAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="URL"
          />
          <span className="text-gray-500 flex gap-1 items-center text-sm leading-125">
            <PiGlobeHemisphereWestFill />
            hearinguru.url/blog/The-importance-of-ear-care
          </span>
        </div>

        <div className="w-full">
          <label
            htmlFor="Date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <Datepicker color={"blue"} placeholder="Select date" />
        </div>
        <div className="w-full">
          <label
            htmlFor="Category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="Category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="US">
              Pending
            </option>
            <option value="US">Success</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor=" Cover Image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cover Image
          </label>
          <label className="cursor-pointer" htmlFor="cover-img-file">
            <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {image.image ? (
                <Image
                  alt="cover-img"
                  width={256}
                  height={126}
                  style={{borderRadius: '3px'}}
                  src={image.image ? image.image.toString() : ""}
                ></Image>
              ) : (
                <Button color="blue" size={"sm"}>
                  <label className="cursor-pointer" htmlFor="cover-img-file">
                    Upload Here (drag & drop)
                  </label>
                </Button>
              )}

              <input
                id="cover-img-file"
                onChange={handleFileImage}
                type="file"
                className="hidden"
              />
            </span>
          </label>
        </div>
        <div className="w-full">
          <label
            htmlFor="Preference"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Preference
          </label>
          <select
            id="Preference"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="US">
              Pending
            </option>
            <option value="US">Success</option>
          </select>
        </div>

        <div className="w-full">
          <div className=" mb-2 flex w-full justify-between items-center">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </h5>
            <p className="text-gray-500 text-xs leading-150">
              A note for extra info
            </p>
          </div>

          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write text here ..."
                defaultValue={""}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                    />
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span className="sr-only">Set location</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="Author Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author Name
          </label>
          <input
            type="text"
            id="Author Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Author Name"
          />
        </div>

        <div className="w-full">
          <div className=" mb-2 flex w-full justify-between items-center">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              About Author
            </h5>
            <p className="text-gray-500 text-xs leading-150">
              A note for extra info
            </p>
          </div>

          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 overflow-hidden rounded-lg py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write text here ..."
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default AddNewArticle;
