"use client";
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import ChooseAccount from "@/components/dashboard/choose-account";

export default function AutoAdd() {
  return (
    <div className="flex justify-center items-center pt-28">
      <div className="grid grid-cols-2 gap-4">
        <div
          className="bg-white rounded-lg p-6 w-72 flex flex-col justify-center items-center shadow-md"
          style={{
            borderRadius: "16px", // Adjust this value for the desired border radius
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)", // Adjust the box shadow values as needed
            marginRight: "20px", // Adjust this value for the desired spacing between the cards
          }}
        >
          <div className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-lg"
              src="/assets/icons/groups-delete.png"
              width={124}
              height={124}
            />
          </div>
          <div className="pb-2 pt-1 px-1 flex flex-col items-center">
            <p className="text-xl font-bold">Joined Groups</p>
            <p className="text-gray-500 text-center text-xs font-semibold">
              Click here to add all members of the group that have joined
            </p>
            <a className="text-base bg-[#2652FF] text-white rounded-lg px-3 py-1 mt-3" href="/fb-auto-post/halaman-auto-add">
            Joined Groups


            </a>
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-6 w-72 flex flex-col justify-center items-center shadow-md"
          style={{
            borderRadius: "16px", // Adjust this value for the desired border radius
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)", // Adjust the box shadow values as needed
            marginRight: "20px", // Adjust this value for the desired spacing between the cards
          }}
        >
          <div className="overflow-visible py-1 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-lg"
              src="/assets/icons/groups-delete.png"
              width={124}
              height={124}
            />
          </div>
          <div className="pb-2 pt-1 px-1 flex flex-col items-center">
            <p className="text-xl font-bold">Unjoined Groups</p>
            <p className="text-gray-500 text-center text-xs font-semibold">
              Click here to add all members of the group who have not yet joined
            </p>

            <a className="text-base bg-[#2652FF] text-white rounded-lg px-3 py-1 mt-3" href="/fb-auto-post/halaman-auto-add-1">
            Unjoined Groups
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
