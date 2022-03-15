import React from "react";
import Footer from "../shared/Footer/footer";
import Navbar from "../shared/Navbar/Navbar";
import FifthBanner from "../shared/Pages/Homepage/fifthBanner";
import FirstBanner from "../shared/Pages/Homepage/firstBanner";
import FocusBanner from "../shared/Pages/Homepage/focusBanner";
import FourthBanner from "../shared/Pages/Homepage/fourthBanner";
import Getstarted from "../shared/Pages/Homepage/getstarted";
import SecondBanner from "../shared/Pages/Homepage/secondBanner";
import Seventhbanner from "../shared/Pages/Homepage/seventhBanner";
import SixthBanner from "../shared/Pages/Homepage/sixthBanner";
import ThirdBanner from "../shared/Pages/Homepage/thirdBanner";

function Homepage() {
  return (
    <div>
      <Navbar />
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
      <FourthBanner />
      <FifthBanner />
      <SixthBanner />
      <Seventhbanner />
      <Getstarted />
      <FocusBanner />
      <Footer />
    </div>
  );
}
export default Homepage;
