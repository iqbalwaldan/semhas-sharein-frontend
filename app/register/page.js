"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CarouselSharein from "@/components/carouselSharein";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "@/components/input";
import InputError from "@/components/inputError";
import LogoSharein from "@/components/logoSharein";
import axios from "@/lib/axios";

export default function Register() {
  const countryCodes = ["+62", "+1", "+44", "+81"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [country_number, setCountry_number] = useState("+62");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCodeSelect = (code) => {
    setCountry_number(code);
    setIsDropdownOpen(false);
  };

  const { register } = useAuth({
    middleware: "guest",
  });
  const router = useRouter();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullPhoneNumber = `${country_number}${phone_number}`;

    register({
      first_name,
      last_name,
      email,
      phone_number: fullPhoneNumber,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [googleUrl, setGoogleUrl] = useState("");

  const loginGoogle = async (e) => {
    e.preventDefault();
    const googleUrl = await axios.get("/api/auth/google");
    setGoogleUrl(googleUrl.data);
    // window.location.href = googleUrl;
  };

  useEffect(() => {
    console.log(googleUrl.data);
    if (googleUrl != "") {
      window.location.href = googleUrl;
    }
  }, [googleUrl]);
  return (
    <div className="flex flex-col md:flex-row">
      <CarouselSharein />
      <div className="md:w-register-right h-screen">
        <div className="bg-white w-full h-full md:px-16 md:py-3 2xl:my-14">
          <LogoSharein />
          <h1 className="font-bold text-2xl 2xl:text-4xl text-neutral-80 mb-1 2xl:mb-4">
            Sign Up
          </h1>
          <p className="text-sm 2xl:text-base font-light text-neutral-70">
            Welcome back! Please enter your details
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-full md:flex flex-row space-x-2 md:justify-between">
              <div className="w-1/2 flex flex-col mt-3 2xl:mt-6">
                <div className="flex mb-1">
                  <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                    First Name
                  </p>
                  <p className="font-normal text-xs 2xl:text-base text-error-base">
                    *
                  </p>
                </div>
                <Input
                  type="text"
                  placeholder="your first name"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
                <InputError messages={errors.first_name} className="mt-2" />
              </div>
              <div className="w-1/2 flex flex-col mt-3 2xl:mt-6">
                <div className="flex mb-1">
                  <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                    Last Name
                  </p>
                  <p className="font-normal text-xs 2xl:text-base text-error-base">
                    *
                  </p>
                </div>
                <Input
                  type="text"
                  placeholder="your last name"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
                <InputError messages={errors.last_name} className="mt-2" />
              </div>
            </div>

            <div className="flex flex-col mt-3 2xl:mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                  Email
                </p>
                <p className="font-normal text-xs 2xl:text-base text-error-base">
                  *
                </p>
              </div>
              <Input
                type="text"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputError messages={errors.email} className="mt-2" />
            </div>
            <div className="flex flex-col mt-3 2xl:mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                  Phone Number
                </p>
                <p className="font-normal text-xs 2xl:text-base text-error-base">
                  *
                </p>
              </div>
              <div className="relative w-full flex">
                <input
                  className="cursor-pointer border border-r-0 border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-14 2xl:w-20 h-10 2xl:h-12 rounded-l-md text-xs 2xl:text-base font-light"
                  type="text"
                  placeholder="+62"
                  value={country_number}
                  onChange={(e) => setCountry_number(e.target.value)}
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-[18%] top-9 text-xs 2xl:text-base text-neutral-70 bg-white border border-[#CFCFCF] shadow-lg rounded-b-md">
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
                  className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-full flex-grow h-10 2xl:h-12 rounded-r-md text-xs 2xl:text-base font-light"
                  type="text"
                  placeholder="your phone number"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
              <InputError messages={errors.phone_number} className="mt-2" />
            </div>
            <div className="flex flex-col mt-3 2xl:mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                  Password
                </p>
                <p className="font-normal text-xs 2xl:text-base text-error-base">
                  *
                </p>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputError messages={errors.password} className="mt-2" />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-70"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-3 2xl:mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-xs 2xl:text-base text-neutral-70">
                  Password Confirmation
                </p>
                <p className="font-normal text-xs 2xl:text-base text-error-base">
                  *
                </p>
              </div>
              <div className="relative">
                <Input
                  labelInput={"Password Confirmation"}
                  type={showPassword2 ? "text" : "password"}
                  placeholder="your password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <InputError messages={errors.password} className="mt-2" />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-70"
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <button
              className="bg-[#2652FF] w-full h-10 2xl:h-[51px] mt-5 2xl:mt-10 rounded-md py-2 px-4 text-base 2xl:text-xl font-semibold text-white"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          {/* <p className="my-2 2xl:my-6 2xl:text-base text-xs text-center">
            or login with
          </p>
          <div className="w-full flex flex-col mt-0 2xl:mt-4">
            <button
              onClick={loginGoogle}
              className="w-full my-0 2xl:my-2 rounded-md border border-[#CACBCD] p-2 text-xs 2xl:text-base text-center text-[#7D7F82] flex gap-3 item-center justify-center"
            >
              <Image src="/assets/icons/google2.png" width="20" height="20" />
              Continue with Google
            </button>
          </div> */}
          <div className="flex mx-auto mt-2 2xl:mt-3 justify-center">
            <p className="font-normal text-xs 2xl:text-base text-neutral-70">
              Already have an account?&nbsp;
            </p>
            <a
              className="font-semibold text-xs 2xl:text-base text-primary-base"
              href="/login"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
