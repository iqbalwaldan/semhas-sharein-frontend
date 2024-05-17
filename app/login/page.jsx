"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CarouselSharein from "@/components/carouselSharein";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import Input from "@/components/input";
import InputError from "@/components/inputError";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LogoSharein from "@/components/logoSharein";
import axios from "@/lib/axios";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/fb-auto-post",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);

    login({
      email,
      password,
      remember_token: shouldRemember,
      setErrors,
      setStatus,
    }).finally(() => {
      setLoading(false);
    });
  };

  const [googleUrl, setGoogleUrl] = useState("");

  const loginGoogle = async (e) => {
    e.preventDefault();
    const googleUrl = await axios.get("/api/auth/google/redirect");
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
      <div className="md:w-register-right w-full h-full">
        <div className="bg-white px-24 py-10 2xl:px-32 2xl:py-52">
          <LogoSharein />
          <h1 className="font-bold text-3xl 2xl:text-4xl text-neutral-80 mb-2 2xl:mb-4">
            Sign In
          </h1>
          <p className="text-xs 2xl:text-base font-light text-neutral-70">
            Welcome back! Please enter your details
          </p>
          {/* <div className="w-full flex flex-col mt-4">
            <button
              onClick={loginGoogle}
              className="w-full my-2 rounded-md border border-[#CACBCD] p-2 text-center text-[#7D7F82] flex gap-3 item-center justify-center"
            >
              <Image src="/assets/icons/google2.png" width="20" height="20" />
              Continue with Google
            </button>
          </div> */}
          <form onSubmit={submitForm}>
            {/* <div className="py-3 2xl:py-6 flex items-center justify-center">
              <div className="w-16 2xl:w-[80px] h-[1px] bg-[#4B4C4E] mx-2"></div>
              <p className="text-[#4B4C4E] text-sm 2xl:text-base">
                or Sign with Email
              </p>
              <div className="w-16 2xl:w-[80px] h-[1px] bg-[#4B4C4E] mx-2"></div>
            </div> */}
            <div className="flex flex-col mt-3 2xl:mt-6 w-full">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">Email</p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <Input
                id="email"
                type="email"
                autoFocus
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputError messages={errors.email} className="mt-2" />
            </div>
            <div className="flex flex-col mt-3 2xl:mt-6 w-full">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">
                  Password
                </p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-70"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <InputError messages={errors.password} className="mt-2" />
            </div>

            <div className="w-full flex items-center justify-between mt-4">
              <div className="w-full flex items-center">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    name="remember"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(event) =>
                      setShouldRemember(event.target.checked)
                    }
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm  font-bold whitespace-nowrap text-[#2652FF]"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#2652FF] w-full h-[51px] mt-10 rounded-md py-2 px-4 text-xl font-semibold text-white"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="flex mx-auto mt-3 justify-center">
            <p className="font-normal text-base text-neutral-70">
              Already have an account?&nbsp;
            </p>
            <a
              className="font-semibold text-base text-primary-base"
              href="/register"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
