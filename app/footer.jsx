import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full h-full bg-primary-base py-28">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className="flex justify-center bg-white w-10 h-10 rounded mr-2 mb-10 p-1">
              <img
                src="/assets/images/logo-gradient.png"
                width={22}
                height={20}
              />
            </div>
            <h1 className="text-4xl font-semibold text-white">Sharein</h1>
          </div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            SOCIAL MEDIA
          </h1>
          <div className="flex flex-row items-center gap-4">
            <Link href="">
              <img
                src="/assets/icons/fb-icons.png"
                alt="fb-icons"
                width={26}
                height={26}
              />
            </Link>
            <Link href="">
              <img
                src="/assets/icons/ig-icons.png"
                alt="ig-icons"
                width={26}
                height={26}
              />
            </Link>
            <Link href="">
              <img
                src="/assets/icons/twt-icons.png"
                alt="twt-icons"
                width={26}
                height={26}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">SHOP</h1>
          <Link href="">
            <p className="text-xl font-normal text-white">Products</p>
          </Link>
          <Link href="">
            <p className="text-xl font-normal text-white">Overview</p>
          </Link>
          <Link href="">
            <p className="text-xl font-normal text-white">Pricing</p>
          </Link>
          <Link href="">
            <p className="text-xl font-normal text-white">Release</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">COMPANY</h1>
          <Link href="">
            <p className="text-xl font-normal text-white">About Us</p>
          </Link>
          <Link href="">
            <p className="text-xl font-normal text-white">Contact</p>
          </Link>
          <Link href="">
            <p className="text-xl font-normal text-white">News</p>
          </Link>
          <Link href="/privacy-policy">
            <p className="text-xl font-normal text-white">Privacy Policy</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">OUR COMPANY</h1>
          <Link href="">
            <p className="text-xl font-normal text-white">Find a Location</p>
          </Link>
          <p className="text-xl font-normal text-white">+62 123-12-123-1234</p>
          <p className="text-xl font-normal text-white">halo@sharein.co.id</p>
        </div>
      </div>
    </section>
  );
}
