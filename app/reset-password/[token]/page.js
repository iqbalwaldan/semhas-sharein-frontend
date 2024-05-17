"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/auth";
import CarouselSharein from "@/components/carouselSharein";
import InputError from "@/components/inputError";
import Input from "@/components/input";
import LogoSharein from "@/components/logoSharein";

export default function Reset({ params }) {
  const { get } = useSearchParams();

  const [emailParams, setEmailParams] = useState({
    email: undefined,
  });

  useEffect(() => {
    setEmailParams({
      email: get("email"),
    });
  }, []);

  const email = emailParams.email;
  console.log(email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const token = params.token;
  console.log(token);

  const { resetPassword } = useAuth({
    middleware: "guest",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    resetPassword({
      email,
      password,
      password_confirmation: confirmPassword,
      token,
      setErrors,
      setStatus,
    });
  };
  return (
    <div className="flex flex-col md:flex-row">
      <CarouselSharein />
      <div className="md:w-register-right w-full h-full">
        <div className="bg-white p-6 px-32 py-32 2xl:py-40">
          <LogoSharein />
          <h1 className="font-bold text-4xl text-neutral-80 mb-4">
            Reset Password
          </h1>
          <p className="text-base font-light text-neutral-70">
            Please enter your new password
          </p>
          <form onSubmit={submitForm}>
            <div className=" w-full flex flex-col mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">
                  Password
                </p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <InputError messages={errors.password} className="mt-2" /> */}
              </div>
            </div>
            {/* <InputError messages={errors.password} className="mt-2" /> */}
            <div className=" w-full flex flex-col mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">
                  Confirm Password
                </p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="your confirmation password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* <InputError
                  messages={errors.confirmPassword}
                  className="mt-2"
                /> */}
              </div>
              {/* <InputError messages={errors.password} className="mt-2" /> */}
            </div>
            <button className="bg-[#2652FF] w-full h-[51px] mt-10 rounded-md py-2 px-4 text-xl font-semibold text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
