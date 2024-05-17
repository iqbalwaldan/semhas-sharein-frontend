"use client";
import { useAuth } from "@/hooks/auth";
import React, { useState } from "react";

export default function Profile() {
  const countryCodes = ["+62", "+1", "+44", "+81"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+62");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
    setIsDropdownOpen(false);
  };
  const { user } = useAuth({ middleware: "auth" });

  return (
    <div className="relative w-full h-[280.8px] bg-[url('/assets/images/profile-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute top-4 right-6 w-8 h-7 bg-primary-base rounded-lg p-2 border border-neutral-base flex items-center justify-center">
        <img src="/assets/icons/camera.png" />
      </div>
      <div className="absolute top-1/3 2xl:top-1/2 h-full w-full flex justify-evenly">
        <div className="h-[420px] 2xl:h-[734px] w-[20%] bg-white rounded-2xl border border-neutral-30 flex flex-col items-center">
          <div className="relative w-[100px] h-[100px] 2xl:w-[214px] 2xl:h-[214px] rounded-full bg-[url('/assets/images/person1.png')] bg-cover mt-8">
            <div className="absolute w-9 h-9 2xl:w-[42px] 2xl:h-[42px] -right-2 bottom-1 2xl:right-2 2xl:bottom-2 rounded-full border-[3px] border-white flex justify-center items-center bg-primary-base p-2 2xl:p-3">
              <img src="/assets/icons/camera.png" />
            </div>
          </div>
          <h1 className="mt-4 text-base 2xl:text-xl font-bold text-neutral-80">
            {user?.first_name}&nbsp;{user?.last_name}
          </h1>
          <p className="mt-2 text-xs 2xl:text-base font-normal text-neutral-60">
            Platinum Member
          </p>
          <p className="mt-2 text-xs 2xl:text-base font-normal text-neutral-60">
            {user?.phone_number}
          </p>
          <p className="mt-2 text-xs 2xl:text-base font-normal text-neutral-60">
            {user?.email}
          </p>
        </div>
        <div className="h-[420px] 2xl:h-[734px] w-[70%] bg-white rounded-2xl border border-neutral-30 pt-8 px-10 flex flex-col gap-6">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">
                  First Name
                </p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-sm font-light"
                type="text"
                placeholder="your first name"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">Last Name</p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-sm font-light"
                type="text"
                placeholder="your last name"
              />
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">Email</p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-full h-12 rounded-md text-sm font-light"
                type="text"
                placeholder="your email"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">
                  Phone Number
                </p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <div className="relative flex">
                <input
                  onClick={toggleDropdown}
                  className="cursor-pointer border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-[20%] h-12 rounded-l-md text-sm font-light"
                  type="text"
                  value={selectedCode}
                  readOnly
                />
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-[18%] top-9 bg-white border border-[#CFCFCF] shadow-lg rounded-b-md">
                    {countryCodes.map((code) => (
                      <div
                        key={code}
                        onClick={() => handleCodeSelect(code)}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                      >
                        {code}
                      </div>
                    ))}
                  </div>
                )}
                <input
                  className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-full h-12 rounded-r-md text-sm font-light"
                  type="text"
                  placeholder="your phone number"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">
                  Old Password
                </p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-sm font-light"
                type="text"
                placeholder="your old password"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mb-1">
                <p className="font-normal text-sm text-neutral-70">
                  New Password
                </p>
                <p className="font-normal text-sm text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-sm font-light"
                type="text"
                placeholder="your new password"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full items-center gap-6 mt-9">
            <button className="px-4 py-2 bg-[#EDEDED] text-neutral-base font-medium text-sm rounded-md">
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary-base text-white font-medium text-sm rounded-md">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
