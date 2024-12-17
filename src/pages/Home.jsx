import React from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import Intro from "../assets/components/Intro";
import Examples from "../assets/components/Examples";


function Home() {
  return(
    <>
      <Navbar />
      <Intro />
      <Examples />
      <Footer />
    </>
  )
}

export default Home;
