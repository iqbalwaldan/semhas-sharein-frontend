"use client";
import CarouselSharein from "@/components/carouselSharein";
import Link from "next/link";
import { useState } from "react";

export default function VerifyEmailAlreadySuccess() {
  const [status, setStatus] = useState(null);

  return (
    <div className="flex flex-col md:flex-row">
      <CarouselSharein />
      <div className="md:w-register-right h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div>
            <img src="/assets/icons/verify-email-icon.png" alt="verify-email" />
          </div>
          <h1 className="text-4xl font-semibold text-neutral-90">
            Verification Success
          </h1>
          <p className="text-lg font-normal text-neutral-70 text-center">
            Thankyou for your support to Sharein
          </p>
          <Link href="/login">
            <button>
              <p className="text-lg font-semibold bg-primary-base text-white px-5 py-1 rounded-lg mt-4">
                Go to login page
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
