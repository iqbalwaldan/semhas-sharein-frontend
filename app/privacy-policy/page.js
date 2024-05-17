import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";
import ContentPrivacyPolicy from "./content-privacy-policy";
import HeroPrivacyPolicy from "./hero-privacy-policy";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <HeroPrivacyPolicy />
      <div className="p-[132px] w-full h-full flex">
        <div className="w-[327px] h-[750px] border-[1.5px] border-neutral-30 rounded-lg p-5 mr-20">
          <h1 className="text-2xl font-semibold text-black">Privacy Policy</h1>
          <div className="mt-6 flex flex-col space-y-4 text-lg font-normal text-black">
            <Link href="#privacy-policy-for-sharein">
              <p>Privacy Policy for ShareIn</p>
            </Link>
            <Link href="#log-files">
              <p>Log Files</p>
            </Link>
            <Link href="#cookies-and-web-beacons">
              <p>Cookies and Web Beacons</p>
            </Link>
            <Link href="#google-double-click-dart-cookie">
              <p>Google Double Click DART Cookie</p>
            </Link>
            <Link href="#our-advertising-partners">
              <p>Our Advertising Partners</p>
            </Link>
            <Link href="#privacy-policies">
              <p>Privacy Policies</p>
            </Link>
            <Link href="#third-party-privacy-policies">
              <p>Third Party Privacy Policies</p>
            </Link>
            <Link href="#childrens-informations">
              <p>Children&#39;s Information</p>
            </Link>
            <Link href="#online-privacy-policy-only">
              <p>Online Privacy Policy Only</p>
            </Link>
            <Link href="#concent">
              <p>Consent</p>
            </Link>
          </div>
        </div>
        <div className="h-full w-[773px]">
          <ContentPrivacyPolicy />
        </div>
      </div>
      <Footer />
    </div>
  );
}
