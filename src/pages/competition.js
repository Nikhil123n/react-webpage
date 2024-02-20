import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";
const competitionFigureData = require('../json/competition.json');
import "./certificate.css";

const Competition = () => {  
  
  const StudentLoveProgram = 'none';

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
          <GridElements 
            data={competitionFigureData}
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

export default Competition;