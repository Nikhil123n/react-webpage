import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";
const conferenceFigureData = require('../json/conference.json');
import "./certificate.css";

const Conference = () => {  
  
  const StudentLoveProgram = 'none';

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
          <GridElements 
            data={conferenceFigureData}
            />

          {/* Caruosel data remains same for every page */}
          <Carousel />
        </div>
      </section>
      <ConnectUs 
        divNone={StudentLoveProgram}        
      />
      <Footer />
    </div>
  );
};

export default Conference;