"use client";
import { MessageIcon, NotificationIcon } from "@/public/assets/icons";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Header({ title, user }) {
  const [hasNotifications, setHasNotifications] = useState(true);
  const notificationIconColor = hasNotifications
    ? "text-error-base"
    : "text-transparent";

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex w-full h-[86px] py-4 bg-white">
      <div className="flex flex-grow items-center gap-2 justify-between px-8">
        <div className="flex items-center w-[75%] justify-between">
          <h1 className="text-4xl font-semibold text-primary-base">{title}</h1>
          <div className="relative w-1/2">
            <input
              className="pl-10 bg-[#F8F8F8] text-base font-normal placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="Search"
            />
            <FiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-neutral-60" />
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-end">
          <NotificationIcon className={notificationIconColor} />
          <MessageIcon />
          <div
            className="relative w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/person1.png')]"
            onClick={toggleDropdown}
          >
            {isOpen && (
              <div className="absolute top-9 -left-5 -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-md py-2">
                <ul>
                  <li className="px-4 py-2">{user?.first_name}</li>
                  <Link href="/fb-auto-post/profile">
                    <li className="px-4 py-2">Profile</li>
                  </Link>
                  <Link href="/fb-auto-post/invoice">
                    <li className="px-4 py-2">Invoice</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
