"use client";
import { LockIcon, TimeCylceIcon } from "@/public/assets/icons";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineQuestionCircle } from "react-icons/ai";

const paymentMethodData = [
  {
    id: "kartuKredit",
    name: "Kartu Kredit",
    img: "visa-logo.png",
  },
  {
    id: "bca",
    payment_type: "bank_transfer",
    bank: "bca",
    name: "BCA Virtual Account",
    img: "bca-logo.png",
  },
  {
    id: "mandiri",
    payment_type: "bank_transfer",
    name: "Mandiri Virtual Account",
    img: "mandiri-logo.png",
  },
  {
    id: "bni",
    payment_type: "bank_transfer",
    name: "BNI Virtual Account",
    img: "bni-logo.png",
  },
  {
    id: "bri",
    payment_type: "bank_transfer",
    name: "BRI Virtual Account",
    img: "bri-logo.png",
  },
  {
    id: "maybank",
    payment_type: "bank_transfer",
    name: "Maybank Virtual Account",
    img: "maybank-logo.png",
  },
  {
    id: "permata",
    payment_type: "bank_transfer",
    name: "Permata Bank Virtual Account",
    img: "permata-logo.png",
  },
  {
    id: "qris",
    payment_type: "e_wallet",
    name: "QRIS",
    img: "qris-logo.png",
  },
  {
    id: "ovo",
    payment_type: "e_wallet",
    name: "OVO",
    img: "ovo-logo.png",
  },
  {
    id: "gopay",
    payment_type: "e_wallet",
    name: "Gopay",
    img: "gopay-logo.png",
  },
  {
    id: "dana",
    payment_type: "e_wallet",
    name: "Dana",
    img: "dana-logo.png",
  },
];

const paymentDetailsData = [
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
  {
    icon: <AiOutlineCheck color="green" />,
    text: "Massal Post to Marketplace",
    price: "5.755.2200",
    disc_price: "2.203.200",
  },
];

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState();

  const handlePaymentSelect = (paymentId, paymentName, paymentType) => {
    setSelectedPayment(paymentId);
    localStorage.setItem("bank", paymentName);
    localStorage.setItem("name", paymentId);
    localStorage.setItem("payment_type", paymentType);
  };

  const handleCreatePaymentBill = () => {
    // Use the selectedPayment value for further actions
    if (selectedPayment) {
      // Perform actions related to the selected payment, e.g., create a payment bill
      console.log(`Creating payment bill for ${selectedPayment}`);
    } else {
      // Handle the case where no payment method is selected
      console.error("No payment method selected");
    }
  };
  return (
    <div className="w-full h-full flex flex-row gap-7 2xl:gap-20">
      <div className="w-[40%] 2xl:w-[30%] h-full bg-white">
        <h1 className="text-2xl font-bold text-neutral-80 mb-8">
          Pilih Pembayaran
        </h1>
        <div className="flex flex-col gap-[18px]">
          {paymentMethodData.map((item) => (
            <div key={item.id}>
              <div
                className="p-4 flex flex-row justify-between cursor-pointer"
                onClick={() =>
                  handlePaymentSelect(item.id, item.name, item.payment_type)
                }
              >
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedPayment === item.id
                        ? "border-[3px] border-primary-base mr-4"
                        : "border-[1px] border-primary-base mr-4"
                    }`}
                  ></div>
                  <p className="text-base font-semibold text-neutral-80">
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={`/assets/logos/${item.img}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[65%] 2xl:w-[47%] h-full bg-white">
        <div className="p-4">
          <div className="p-4 flex justify-between">
            <h2 className="text-base font-semibold text-neutral-100">
              Platinum Plan - 1 Month Package
            </h2>
            <div className="flex items-center">
              <p className="text-sm font-normal text-neutral-60 line-through mr-6">
                Rp 5.755.200
              </p>
              <p className="text-base font-semibold text-neutral-80">
                Rp 2.203.200
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[14px] px-4">
            {paymentDetailsData.map((item) => (
              <div key={item}>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {item.icon}
                    <h2 className="ml-2 text-sm font-normal text-neutral-80">
                      {item.text}
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm font-normal text-neutral-60 line-through mr-6">
                      Rp {item.price}
                    </p>
                    <p className="text-base font-semibold text-neutral-80">
                      Rp {item.disc_price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[1px] w-full bg-neutral-20 my-4"></div>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal text-neutral-80">
                Package Discount -62%
              </p>
              <p className="text-base font-semibold text-success-60">
                -Rp 3.522.000
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="mr-2 text-sm font-normal text-neutral-80">
                  Taxes & Additional Costs
                </p>
                <AiOutlineQuestionCircle color="#2044D4" />
              </div>
              <p className="text-base font-semibold text-neutral-80">
                -Rp 3.522.000
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-neutral-20 my-4"></div>
          <div className="flex justify-between px-4 items-center">
            <h1 className="text-2xl font-bold text-neutral-80">Total</h1>
            <div className="flex justify-between w-[40%] items-center">
              <p className="text-sm font-normal text-neutral-60 line-through">
                -Rp 3.522.000
              </p>
              <p className="text-base font-semibold text-neutral-80">
                -Rp 3.522.000
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-neutral-20 my-4"></div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <Link href="/fb-auto-post/subscription/payment/detail">
                <button
                  onClick={handleCreatePaymentBill}
                  className="px-14 py-2 rounded-md bg-primary-base text-base font-medium text-white"
                >
                  Create a Payment Bill
                </button>
              </Link>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <TimeCylceIcon color="#44AC22" />
                  <p className="text-sm font-normal text-neutral-80">
                    30 Day Money Back Guarantee
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <LockIcon color="#44AC22" />
                  <p className="text-sm font-normal text-neutral-80">
                    Secure and Encrypted Payments
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" className="w-4 h-4 mr-4 mt-1" />
              <p className="text-sm font-normal text-neutral-80">
                By Checkout, you agree to our
                <span className="text-sm font-bold text-primary-base">
                  Terms of Use
                </span>
                and confirm that you have read our
                <span className="text-sm font-bold text-primary-base">
                  Privacy Policy
                </span>
                . You can cancel the service renewal fee at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
