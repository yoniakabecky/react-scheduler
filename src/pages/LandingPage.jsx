import React from "react";

// Components
import Hero from "../components/Landing/Hero";
import LandingAboutSection1 from "../components/Landing/LandingAboutSection1";
import LandingAboutSection2 from "../components/Landing/LandingAboutSection2";
import LandingBottomSection from "../components/Landing/LandingBottomSection";
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
