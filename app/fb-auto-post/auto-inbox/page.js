import Link from "next/link";
import React from "react";

export default function AutoInbox() {
  return (
    <div>
      <div className="w-full h-[480px] 2xl:h-[889px] flex items-center justify-center border border-neutral-10 rounded-2xl">
        <div className="w-[230px] h-[280px] 2xl:w-[296px] 2xl:h-[352px] px-4 py-6 bg-white border border-neutral-10 rounded-2xl shadow-lg flex flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 2xl:w-[124px] 2xl:h-[124px] bg-primary-10 rounded-full flex items-center justify-center">
              <div className="w-9 h-9 2xl:w-[58px] 2xl:h-[58px]">
                <img src="/assets/icons/friend-list.png" alt="friend-list" />
              </div>
            </div>
            <h1 className="text-lg 2xl:text-2xl font-bold text-neutral-90 mt-4">
              Friend List
            </h1>
            <p className="text-xs 2xl:text-base font-normal text-neutral-90 mt-2">
              Click here to add all members of the group that have joined
            </p>
          </div>
          <Link href="/fb-auto-post/auto-inbox/friend-list/">
            <button className="bg-primary-base text-xs 2xl:text-base font-medium text-white rounded-md py-2 px-6">
              Joined Groups
            </button>
          </Link>
        </div>
        <div className="ml-[72px] w-[230px] h-[280px] 2xl:w-[296px] 2xl:h-[352px] px-4 py-6 bg-white border border-neutral-10 rounded-2xl shadow-lg flex flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 2xl:w-[124px] 2xl:h-[124px] bg-primary-10 rounded-full flex items-center justify-center">
              <div className="w-9 h-9 2xl:w-[58px] 2xl:h-[58px]">
                <img src="/assets/icons/friend-list.png" alt="friend-list" />
              </div>
            </div>
            <h1 className="text-lg 2xl:text-2xl font-bold text-neutral-90 mt-4">
              Member Groups
            </h1>
            <p className="text-xs 2xl:text-base font-normal text-neutral-90 mt-2">
              Click here to add all members of the group that have joined
            </p>
          </div>
          <Link href="/fb-auto-post/auto-inbox/member-groups/">
            <button className="bg-primary-base text-xs 2xl:text-base font-medium text-white rounded-md py-2 px-6">
              Unjoined Groups
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
