import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Reason from "./reason";
import Subscribe from "./subscribe";
import Join from "./join";
import How from "./how";
import Commitment from "./commitment";
import Testimonial from "./testimonial";
import Newsletter from "./newsletter";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reason />
      <Subscribe />
      <How />
      <Join />
      <Commitment />
      <Testimonial />
      {/* <Features /> */}
      <Newsletter />
      <Footer />
    </>
  );
}
