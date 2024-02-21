import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import Details from "../components/details";
import Footer from "../components/Footer";
import React from "react";

import "./certificate.css";

const Certificate = () => {
  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
          {/* <GridElements/> */}
          {/* Other Happening */}
          {/* <Carousel /> */}
          <Details/>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Certificate;
