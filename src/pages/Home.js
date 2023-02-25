import React from "react";
import Footer from "../components/Footer";

import Home1 from "../components/Home1";
import Home2 from "../components/Home2";

import Home5 from "../components/Home5";
import Home6 from "../components/Home6";
import Home7 from "../components/Home7";
import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Home1 />
      <Home2 />

      <Home5 />
      <Home7 />
      <Home6 />
      <Footer />
    </>
  );
};
export default Home;
