import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";
const masterclassFigureData = require('../json/masterclass.json');
import "./certificate.css";

const Masterclass = () => {  
  
  const StudentLoveProgram = 'none';

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />

          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li >
                      <a href="/" style={{fontSize:'30px'}}>
                          <img src="/home.png">
                          </img>
                      </a>
                  </li>      
                  <li class="breadcrumb-item"></li>                      
                  <li class=" active" style={{fontSize: '18px', color:'#F1B537', marginTop:'15px' }} >  Our Offerings  </li>
                  <li class="breadcrumb-item"></li>                      
                  <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Ivy Masterclasses  </li>
              </ol>
          </nav>

          <GridElements 
            data={masterclassFigureData}
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

export default Masterclass;