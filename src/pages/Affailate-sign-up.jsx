import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

import hamaralogo from '../assets/hamaralogo.webp'
import one from '../assets/one.jpg'


export default function AffailateSignUp() {

  const navigate = useNavigate()

  const { signup } = useAuth()

  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hasWebsite, setHasWebsite] = useState(true);
  const [hasYoutube, setHasYoutube] = useState(false);
  const [hasInstagram, setHasInstagram] = useState(false);

  const onSubmit = async (data) => {
    if(!hasWebsite && !hasYoutube && !hasInstagram){
        alert('Atleast one of youtube, website, instagram should be provided')
        return
    }
    console.log(data);
    const resp = await signup(data)
    if (resp?.user) {
      // navigate to dashboard
      navigate("/signin");
    } else {
      // display error
      console.log(resp?.response?.data?.errors[0]?.msg);
      setErrMsg(resp?.response?.data?.errors[0]?.msg);
      setShow(true);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "hasWebsite":
        setHasWebsite(checked);
        break;
      case "hasYoutube":
        setHasYoutube(checked);
        break;
      case "hasInstagram":
        setHasInstagram(checked);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src={hamaralogo}
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Affailate Sign Up
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  id="registrationForm"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* name  */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="email"
                        {...register("name", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.name && (
                        <span className="text-red-500">Name is required</span>
                      )}
                    </div>
                  </div>
                  {/* email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        {...register("email", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && (
                        <span className="text-red-500">Email is required</span>
                      )}
                    </div>
                  </div>
                  {/* mobile number  */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile No
                    </label>
                    <div className="mt-2">
                      <input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="tel"
                        {...register("mobile", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.mobileNumber && (
                        <span className="text-red-500">
                          Mobile Number is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/* add any one CHECKBOX */}
                  <h5> Please Add Atleast Any One</h5>
                  <div className="choice-fields flex gap-10">
                    <div className="choice-fields-element flex items-center justify-center gap-4">
                      <input
                        type="checkbox"
                        id="hasWebsite"
                        name="hasWebsite"
                        checked={hasWebsite}
                        onChange={handleCheckboxChange}
                        className=" accent-[#e62e56]"
                      />
                      <label htmlFor="hasWebsite">Website / Blog</label>
                    </div>
                    <div className="choice-fields-element flex items-center justify-center gap-4">
                      <input
                        type="checkbox"
                        id="hasYoutube"
                        name="hasYoutube"
                        checked={hasYoutube}
                        onChange={handleCheckboxChange}
                        className=" accent-[#e62e56]"
                      />
                      <label htmlFor="hasYoutube">YouTube Channel</label>
                    </div>
                    <div className="choice-fields-element flex items-center justify-center gap-4">
                      <input
                        type="checkbox"
                        id="hasInstagram"
                        name="hasInstagram"
                        checked={hasInstagram}
                        onChange={handleCheckboxChange}
                        className=" accent-[#e62e56]"
                      />
                      <label htmlFor="hasInstagram">Instagram</label>
                    </div>
                  </div>

                  {/* //// */}

                  {/* input feilds for website , youtube , instagram  */}
                  <div className=" flex flex-col">
                  <label
                    className={hasWebsite ? " flex flex-col" : "hidden"}
                    htmlFor="websiteAddress"
                  >
                    Website Url:
                    <input
                      type="url"
                      id="websiteAddress"
                      name="websiteAddress"
                      {...register("website", { required: hasWebsite })}
                      className={hasWebsite ? "mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" : "hidden"}
                    />
                    {errors.websiteAddress && (
            <span className="text-red-500">Website Url is required</span>
          )}
                  </label>

                  <label
                    className={hasYoutube ? "flex flex-col mt-4" : "hidden"}
                    htmlFor="youtubeChannel"
                  >
                    YouTube Channel Link:
                    <input
                      type="url"
                      id="youtubeChannel"
                      name="youtubeChannel"
                      {...register("youtube", { required: hasYoutube })}
                      className={hasYoutube ? "mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" : "hidden"}
                    />
                    {errors.youtubeChannel && (
            <span className="text-red-500">
              YouTube Channel Link is required
            </span>
          )}
                  </label>

                  <label
                    className={hasInstagram ? "flex flex-col mt-4" : "hidden"}
                    htmlFor="instagramId"
                  >
                    Instagram ID:
                    <input
                      type="text"
                      id="instagramId"
                      name="instagramId"
                      {...register("instagram", { required: hasInstagram })}
                      className={hasInstagram ? "mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" : "hidden"}
                    />
                    {errors.instagramId && (
            <span className="text-red-500">Instagram ID is required</span>
          )}
                  </label>
                  </div>

                  {/* //  */}

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.password && (
           <span className="text-red-500">Password is required</span>
         )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div> */}

                    {/* <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div> */}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#e62e56] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                {/* <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div> */}

                {/* <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Twitter
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={one}
            alt=""
          />
        </div>
      </div>

      {/* // Toast  */}
      <>
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">Error</p>
                      <p className="mt-1 text-sm text-gray-500">{errMsg}</p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>

      {/* ///  */}
    </>
  );
}
