import React from "react";
import DistributorLink from "../components/DistributorLink";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import Home1 from "../components/Home1";
// import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Home4 from "../components/Home4";
import Home5 from "../components/Home5";

import Home6 from "../components/Home6";

import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Home1 />
      {/* <Home2 /> */}
      <Home3 />
      <Home4 />

      <FAQ />
      <Home5 />
      <Home6 />
      <DistributorLink />
      <Footer />
    </>
  );
};
export default Home;
