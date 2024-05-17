"use client";
import CarouselSharein from "@/components/carouselSharein";
import { useState } from "react";

export default function VerifyEmailForgotPassword() {
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
            Confirmation Email{" "}
          </h1>
          <p className="text-lg font-normal text-neutral-70 text-center">
            Kindly check your email for instructions. We've sent a verification
            message to your email address
          </p>
          {status === "verification-link-sent" && (
            <div className="mb-4 font-medium text-sm text-green-600">
              A new verification link has been sent to the email address you
              provided during registration.
            </div>
          )}
          <div className="mt-4 w-[300px] flex items-center justify-between">
            <p className="text-lg font-normal text-neutral-base">00:30</p>
            <button>
              <p className="text-lg font-semibold text-primary-base">Resend</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
