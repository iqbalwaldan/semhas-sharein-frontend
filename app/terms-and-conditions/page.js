import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";
import ContentTermsAndConditions from "./content-terms-and-conditions";
import HeroTermsAndConditions from "./hero-terms-and-conditions";

export default function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <HeroTermsAndConditions />
      <div className="p-[132px] w-full h-full flex">
        <div className="w-[327px] h-[750px] border-[1.5px] border-neutral-30 rounded-lg p-5 mr-20">
          <h1 className="text-2xl font-semibold text-black">Privacy Policy</h1>
          <div className="mt-6 flex flex-col space-y-4 text-lg font-normal text-black">
            <Link href="#cookies">
              <p>Cookies</p>
            </Link>
            <Link href="#licenses">
              <p>License</p>
            </Link>
            <Link href="#hyperlinking-to-our-content">
              <p>Hyperlinking to our Content</p>
            </Link>
            <Link href="#iframes">
              <p>iFrames</p>
            </Link>
            <Link href="#content-liability">
              <p>Content Liability</p>
            </Link>
            <Link href="#reservation-of-rights">
              <p>Reservation of Rights</p>
            </Link>
            <Link href="#removal-of-links-from-our-website">
              <p>Removal of links from our website</p>
            </Link>
            <Link href="#disclaimer">
              <p>Disclaimer</p>
            </Link>
          </div>
        </div>
        <div className="h-full w-[773px]">
          <ContentTermsAndConditions />
        </div>
      </div>
      <Footer />
    </div>
  );
}
