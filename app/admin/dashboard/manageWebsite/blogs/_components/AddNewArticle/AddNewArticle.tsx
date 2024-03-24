import { Drawer } from "@mui/material";
import { Button, Datepicker } from "flowbite-react";
import React, { Fragment, useEffect, useState } from "react";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";

import { IoClose } from "react-icons/io5";
import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useHandleAsync from "@/modules/StateManagement/useHandleAsync/useHandleAsync";
import addNewArticleBlog from "../../_fetch/services/addNewArticleBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Combobox, Transition } from "@headlessui/react";

import "react-toastify/dist/ReactToastify.css";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useToggle } from "@/modules/StateManagement/useToggle/useToggle";
import AddNewAutherModal from "@/components/Modals/AddNewAuthorModal/AddNewAuthorModal";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import * as commands from "@uiw/react-md-editor/commands";
import getAuthorList from "../../_fetch/services/getAuthorList";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
interface Props {
  closeDrawer: () => void;
  openDrawer: boolean;
}

function AddNewArticle(props: Props) {
  const [autherlist, aLoading, aFether] = useHandleAsync(getAuthorList);
  useEffect(() => {
    aFether();
  }, []);

  const people = autherlist;
  console.log(autherlist);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(people ? people[0] : null);
  const [query, setQuery] = useState("");
  console.log(selected);
  const filteredPeople =
    query === ""
      ? people
      : people?.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
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

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BlogTypes.addNewArticleBlog>({});
  const [openAddNewAutherModal, setOpenAddNewAutherModal] = useToggle(false);
  const [xstate, loading, fetcher] = useHandleAsync(addNewArticleBlog, {
    onSuccess: () => {
      // closeDrawer();
      toast("Blog Created Successfully", { type: "success" });
      reset();
    },
    onError: () => {
      toast("Failed to create Consultancy", { type: "error" });
    },
  });

  const onSubmit: SubmitHandler<BlogTypes.addNewArticleBlog> = (data) => {
    try {
      fetcher({
        ...data,
        authorId: selected?.authorId || "",
        image:
          "https://plus.unsplash.com/premium_photo-1710795018356-4b22df77cf8f",
      });
      console.log(data);
    } catch (error) {}
    console.log(data);
  };
  return (
    <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
      <ToastContainer />
      <AddNewAutherModal
        isOpen={openAddNewAutherModal}
        closeModal={setOpenAddNewAutherModal.hide}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[706px]  flex pt-0 p-4 flex-col items-start gap-8 "
      >
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
            Preview
          </Button>
          <Button color="failure" fullSized size={"sm"}>
            Delete
          </Button>
          <Button
            type="submit"
            isProcessing={loading.isLoading()}
            color="blue"
            fullSized
            size={"sm"}
          >
            Save
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
            {...register("title", {
              required: "Please enter title",
            })}
            type="text"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-500 mt-1 text-xs">{errors.title.message}</p>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="Subtitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subtitle
          </label>
          <input
            {...register("subtitle", { required: "Please enter subtitle" })}
            type="text"
            id="Subtitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter subtitle"
          />
          {errors.subtitle && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.subtitle.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="Slug"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Slug
          </label>
          <input
            {...register("slug", {
              required: "Please enter slug",
              // pattern: {
              //   value: /^[A-Za-z0-9-]+$/,
              //   message: "Please enter valid slug",
              // },
            })}
            type="Slug"
            id="EmailAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="URL"
          />
          <span className="text-gray-500 flex gap-1 items-center text-sm leading-125">
            <PiGlobeHemisphereWestFill />
            hearinguru.url/blog/The-importance-of-ear-care
          </span>
          {errors.slug && (
            <p className="text-red-500 mt-1 text-xs">{errors.slug.message}</p>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="Date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <Controller
            control={control}
            name="createdDate"
            rules={{ required: "Please select a date" }}
            render={({ field }) => (
              <Datepicker
                defaultDate={new Date()}
                onSelectedDateChanged={(date) => {
                  field.onChange(date.toISOString());
                }}
              />
            )}
          />
          {errors.createdDate && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.createdDate.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="Category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            {...register("category", { required: "Please enter category" })}
            id="Category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled defaultValue={""} value="">
              Select Category
            </option>
            <option value="Hear Loss">Hear loss</option>
            <option value="Types And Causes">Types & Causes</option>
            <option value="Symptoms">Symptoms</option>
            <option value="Prevention">Prevention</option>
          </select>
          {errors.category && (
            <p className="text-red-500 mt-1 text-xs">Category is required</p>
          )}
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
                  style={{ borderRadius: "3px" }}
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
            {...register("prefrence")}
            id="Preference"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled defaultValue={""} value="US">
              Select Prefrence
            </option>
            <option value="Latest">Latest</option>
            <option value="Old">Old</option>
          </select>
          {errors.prefrence && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.prefrence.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="Author Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Body
          </label>
          <Controller
            control={control}
            name="body"
            rules={{ required: "Please enter" }}
            render={({ field }) => (
              <MDEditor
                value={value || ""}
                onChange={(value) => {
                  setValue(value || "");
                  field.onChange(value);
                }}
              />
            )}
          />

          {errors.body && (
            <p className="text-red-500 mt-1 text-xs">{errors.body.message}</p>
          )}
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
                {...register("message", { required: "Please enter message" })}
                id="comment"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write text here ..."
                defaultValue={""}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.message.message}
                </p>
              )}
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
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search Auther
          </label>
          <div className="w-full flex-1 flex justify-between items-center">
            <div className=" top-16 w-4/5">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="bg-gray-50 border w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <Combobox.Input
                      className="bg-gray-50 border-none w-full  text-gray-900 text-sm rounded-lg  block p-2.5  "
                      displayValue={(selected: { name: string } | null) =>
                        selected?.name || ""
                      }
                      placeholder="Search Name"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button> */}
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredPeople?.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople?.map((person) => (
                          <Combobox.Option
                            key={person.name}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <Button onClick={setOpenAddNewAutherModal.show} color="blue">
              Create New
            </Button>
          </div>
          {/* {errors.patientDetails?.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.patientDetails.name.message}
            </p>
          )} */}
        </div>
        {/* <div className="w-full">
          <label
            htmlFor="Author Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author Name
          </label>
          <input
            {...register("author.name", {
              required: "Please enter author name",
            })}
            type="text"
            id="Author Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Author Name"
          />
          {errors.author?.name && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.author?.name.message}
            </p>
          )}
        </div> */}
      </form>
    </Drawer>
  );
}

export default AddNewArticle;
