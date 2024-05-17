"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // If the user has scrolled down, change the background color
        setScrolled(true);
      } else {
        // If the user is at the top, reset the background color
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrolled ? "bg-white" : "";

  const textStyles = {
    color: scrolled ? "#2652FF" : "white",
  };

  const buttonRegisterStyles = {
    borderColor: scrolled ? "#2652FF" : "white",
    color: scrolled ? "#2652FF" : "white",
  };

  const buttonLoginStyles = {
    backgroundColor: scrolled ? "#2652FF" : "white",
    color: scrolled ? "white" : "#2652FF",
  };

  return (
    <nav className={`fixed w-full h-24 ${navbarClass} z-50`}>
      <div className="flex justify-between items-center h-full w-full px-24 2xl:px-16">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex items-center justify-center h-9 bg-gradient-to-b from-primary-base to-secondary-base rounded-lg w-9 cursor-pointer">
              <Image
                src="/assets/images/logo-white.png"
                width={21}
                height={23}
              />
            </div>
            <p className="font-bold text-[32px] text-primary-base">Sharein</p>
          </div>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex items-center justify-center">
            <Link href="#hero">
              <li className="ml-10 text-xl font-semibold" style={textStyles}>
                Why us
              </li>
            </Link>
            <Link href="#features">
              <li className="ml-10 text-xl font-semibold" style={textStyles}>
                Features
              </li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 text-xl font-semibold" style={textStyles}>
                Pricing
              </li>
            </Link>
            <Link href="/resources">
              <li className="ml-10 text-xl font-semibold" style={textStyles}>
                Resources
              </li>
            </Link>
            <Link href="/register">
              <li>
                <button
                  className="px-6 py-1 ml-10 rounded-xl text-xl font-semibold border-2 border-neutral-10"
                  style={buttonRegisterStyles}
                >
                  Register
                </button>
              </li>
            </Link>
            <Link href="/login">
              <li>
                <button
                  className="px-6 py-2 ml-10 rounded-xl text-xl font-semibold bg-neutral-10 text-primary-base"
                  style={buttonLoginStyles}
                >
                  Login
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <Image src="/assets/icons/google.png" width={25} height={25}></Image>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-neutral-60 ease-in duration-500"
            : "fixed left-[100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <Image
              src="/assets/icons/google.png"
              width={25}
              height={25}
            ></Image>
          </div>
        </div>
        <ul>
          <Link href="/">
            <div className="w-16 h-16 bg-gradient-to-b from-primary-base to-secondary-base rounded-lg flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/logo-white.png"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Why us
            </li>
          </Link>
          <Link href="/features">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Features
            </li>
          </Link>
          <Link href="/pricing">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Pricing
            </li>
          </Link>
          <Link href="/resources">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Resources
            </li>
          </Link>
          <Link href="/register">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <button className="px-4 py-1 w-1/5 mr-4 rounded-xl text-base font-semibold text-neutral-10 border-2 border-neutral-10">
                Register
              </button>
            </li>
          </Link>
          <Link href="/login">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <button className="px-4 py-1 w-1/5 rounded-xl text-base font-semibold bg-neutral-10 text-primary-base">
                Login
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
