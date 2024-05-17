"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CarouselSharein from "@/components/carouselSharein";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import InputError from "@/components/inputError";
import LogoSharein from "@/components/logoSharein";
import Input from "@/components/input";

export default function Forget() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const { forgotPassword } = useAuth({
    middleware: "guest",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    forgotPassword({
      email,
      setErrors,
      setStatus,
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <CarouselSharein />
      <div className="md:w-register-right w-full h-full">
        <div className="bg-white px-32 py-32 2xl:py-40">
          <LogoSharein />
          <h1 className="font-bold text-3xl 2xl:text-4xl text-neutral-80 mb-4">
            Forgot Password
          </h1>
          <p className="text-base font-light text-neutral-70">
            We will send a password reset link via your email. Please enter the
            email that has been registered
          </p>
          <form onSubmit={submitForm}>
            <div className=" w-full flex flex-col mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">Email</p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputError messages={errors.email} className="mt-2" />
              </div>
            </div>
            <button className="bg-[#2652FF] w-full h-11 2xl:h-[51px] mt-10 rounded-md py-2 px-4 text-base 2xl:text-xl font-semibold text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
