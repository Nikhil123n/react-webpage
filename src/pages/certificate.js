import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";
// import jsonData from '../json/certificate.json'; (or)
const certificateFigureData = require('../json/certificate.json');
// console.log(certificateFigureData);
// console.log(certificateFigureData[0].image);


import "./certificate.css";

const Certificate = () => {  
  
  const StudentLoveProgram = 'none';

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
          <GridElements 
            data={certificateFigureData}
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

export default Certificate;