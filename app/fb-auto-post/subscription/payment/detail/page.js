"use client";
import { CopyIcon } from "@/public/assets/icons";
import Link from "next/link";
import React from "react";

export default function Detail() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[75%] flex flex-col items-center gap-6 mb-8">
        <div className="w-full 2xl:w-[74%] flex text-center justify-center">
          <p className="text-base font-normal text-neutral-60">
            Thank you! After making a purchase, please wait a maximum of 1x24
            hours for the payment to be confirmed. Your payment and order will
            be activated automatically.
          </p>
        </div>
        <Link href="/fb-auto-post/dashboard">
          <button className="bg-primary-base py-2 px-4 text-base font-semibold text-white rounded-md">
            Back to Dashboard
          </button>
        </Link>
        <div className="h-[1px] w-full bg-neutral-20"></div>
      </div>
      <div className="w-[84%] flex flex-row justify-between mb-12">
        <div className="flex flex-row w-[58%] 2xl:w-[49%] justify-between items-center">
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold text-neutral-60">
              Transaction id
            </p>
            <p className="text-base font-semibold text-neutral-60">
              Virtual Account
            </p>
            <p className="text-base font-semibold text-neutral-60">
              Virtual Account Name
            </p>
            <p className="text-base font-semibold text-neutral-60">
              Bill Amount
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold text-neutral-60">
              1234567890
            </p>
            <div className="flex items-center">
              <p className="mr-4 text-base font-semibold text-neutral-60">
                3454632436812213
              </p>
              <div className="flex items-center cursor-pointer">
                <CopyIcon color="#2652FF" />
                <p className="ml-2 text-base font-semibold text-primary-base">
                  Copy
                </p>
              </div>
            </div>
            <p className="text-base font-semibold text-neutral-60">
              Admin Sharein Surabaya
            </p>
            <div className="flex items-center">
              <p className="mr-4 text-base font-semibold text-neutral-60">
                Rp. 2.203.200
              </p>
              <div className="flex items-center cursor-pointer">
                <CopyIcon color="#2652FF" />
                <p className="ml-2 text-base font-semibold text-primary-base">
                  Copy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src="/assets/logos/bca-logo-big.png" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[84%] mb-6">
        <p className="text-sm font-semibold text-neutral-60">
          ATM Payment Steps
        </p>
        <p className="text-sm font-normal text-neutral-60">
          1. Insert{" "}
          <span className="text-sm font-bold text-neutral-60">
            BCA ATM Card & PIN
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          2. Choose Other{" "}
          <span className="text-sm font-bold text-neutral-60">
            Transaction menu {">"} Transfer {">"} to BCA Virtual Account
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          3. Enter your payment code or{" "}
          <span className="text-sm font-bold text-neutral-60">
            BCA Virtual Account number
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          4. On the confirmation page, make sure the payment details are correct
          such as{" "}
          <span className="text-sm font-bold text-neutral-60">
            VA No, Name, Company/Product and Total Bill
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          5. Follow the instructions to complete the transaction
        </p>
        <p className="text-sm font-normal text-neutral-60">
          6. Transaction completed
        </p>
        <p className="text-sm font-normal text-neutral-60">
          7. After the transaction is complete, the invoice will be
          automatically updated. This takes approximately ~15 minutes.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-[84%]">
        <p className="text-sm font-semibold text-neutral-60">
          Payment Steps Through m-Banking
        </p>
        <p className="text-sm font-normal text-neutral-60">
          1. Log in to the{" "}
          <span className="text-sm font-bold text-neutral-60">
            BCA Mobile application
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          2. Select the{" "}
          <span className="text-sm font-bold text-neutral-60">m-BCA menu</span>,
          then enter the{" "}
          <span className="text-sm font-bold text-neutral-60">
            m-BCA access code
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          3. Select{" "}
          <span className="text-sm font-bold text-neutral-60">
            m-Transfer {">"} BCA Virtual Account
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          4. Enter your{" "}
          <span className="text-sm font-bold text-neutral-60">
            payment code
          </span>{" "}
          or{" "}
          <span className="text-sm font-bold text-neutral-60">
            BCA Virtual Account number
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          5. On the confirmation page, make sure the payment details are correct
          such as{" "}
          <span className="text-sm font-bold text-neutral-60">
            VA No, Name, Company/Product and Total Bill
          </span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          6. Enter{" "}
          <span className="text-sm font-bold text-neutral-60">m-BCA pin</span>
        </p>
        <p className="text-sm font-normal text-neutral-60">
          7. Payment is complete. Save the notification that appears as proof of
          payment
        </p>
        <p className="text-sm font-normal text-neutral-60">
          8. After the transaction is complete, the invoice will be
          automatically updated. This takes approximately ~15 minutes.
        </p>
      </div>
    </div>
  );
}
