import React from "react";

// Components
import Hero from "../components/Landing/Hero";
import LandingBottomSection from "../components/Landing/LandingBottomSection";
import Footer from "../components/layouts/Footer";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <LandingBottomSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
