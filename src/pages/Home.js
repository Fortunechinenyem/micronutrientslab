import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import Home1 from "../components/Home1";
import Home2 from "../components/Home2";

import Home5 from "../components/Home5";
import Home6 from "../components/Home6";

import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Home1 />
      <Home2 />

      <Home5 />
      <FAQ />
      <Home6 />
      <Footer />
    </>
  );
};
export default Home;
