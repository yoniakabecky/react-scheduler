import React from "react";

// Components
import Hero from "../components/landing/Hero";
import LandingAboutSection1 from "../components/landing/LandingAboutSection1";
import LandingAboutSection2 from "../components/landing/LandingAboutSection2";
import LandingBottomSection from "../components/landing/LandingBottomSection";
import Footer from "../components/layouts/Footer";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <LandingAboutSection1 />
      <LandingAboutSection2 />
      <LandingBottomSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
