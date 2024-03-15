import NavigationLinks from "../components/NavigationLinks";
import Container from "../components/Container";
import LogoSlider from "../components/LogoSlider";
import DivFusionColumnWrapper1 from "../components/DivFusionColumnWrapper1";
import FutureDoctors from "../components/FutureDoctors";
import EventImgOverlay from "../components/EventImgOverlay";
import DivcolLg from "../components/DivcolLg";
import Timeline from "../components/Timeline";
import EventInfoGrid from "../components/EventInfoGrid";
import EventInfoMasterclass from "../components/EventInfoMasterclass";
import EventInfoAll from "../components/EventInfoAll";
import ThePotentialToLearnForAM from "../components/ThePotentialToLearnForAM";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
          <Container />
        </div>
      </section>

      <section className="arrow-svg">
        <div className="input-enter-your-emailid-butto">
          <div className="frame-programs-divfusioncolumn">
            <h2 className="benefit-from-our">
              Benefit from our collaborations with the world’s best
            </h2>
            <div className="democratising-ivy-league">
              Democratising Ivy League education for all
            </div>
            <LogoSlider />
            
          </div>
        </div>
      </section>
      {/* <section className="arrow-svg">
        <div className="event-img-overlay-parent">
          <div >          
              <h2>Benefit from our collaborations with the world’s best</h2>
          </div>
          <EventImgOverlay />          
        </div>
      </section> */}



      <DivFusionColumnWrapper1 />
      <FutureDoctors />      

      <section className="arrow-svg">
        <div className="event-img-overlay-parent">
          <EventImgOverlay 
              heading = "HDFC Capital Advisors: Corporate Internship Project"
              paragraph = "In collaboration with Harvard Entrepreneurship Collective and Learn with Leaders. Embark on an 8-week Experiential Learning Project Tackling a Fortune 500 real-world business problem, guided by a Harvard undergraduate mentor to craft live solutions that address the impact of Green Finance for residential"
              deadline = "25 February 2024"
              startDate = "2 March 2024"

          />
          <DivcolLg 
              heading="Take the world forward fellowship"
              paragraph="Co-create the future with the world's finest thinkers.                                                                                        "
              deadline = "27 February 2024"
              startDate = "2 March 2024"
              />
          <Timeline />
        </div>
      </section>
      <EventInfoGrid />
      <EventInfoMasterclass />
      <EventInfoAll />
      <section className="WorldMap" >
        <div className="WorldMapOuter" >
          {/* <div className="WorldMapHeading"> 
            <h3>How me make a difference</h3>          
          </div> */}
          <div>
            <img loading="lazy" decoding="async" className="WorldMapImg" src="LWL MAP@2x-100.jpg"></img>
          </div>
        </div>
      </section>

      <ThePotentialToLearnForAM />
      <ConnectUs />
      <div className="s-2-wrapper">
        <div className="s-2">
          <div className="section">
            <div className="heading-2">
              <div className="benefit-from-our">
                Benefit from our collaborations with the world’s best
              </div>
            </div>
            <div className="p">
              <div className="democratising-ivy-league">
                Democratising Ivy League education for all
              </div>
            </div>
          </div>
          <div className="section1">
            <img
              className="screenshot-2022-07-13-at-304-icon"
              alt=""
              src="/screenshot20220713at30443pmpng@2x.png"
            />
            <img
              className="screenshot-2022-07-13-at-309-icon"
              alt=""
              src="/screenshot20220713at30958pmpng@2x.png"
            />
            <img
              className="academies-full-logo-redpng-icon"
              alt=""
              src="/academiesfulllogoredpng@2x.png"
            />
            <img
              className="whatsapp-image-2023-04-04-at-3-icon"
              alt=""
              src="/whatsappimage20230404at34033pmjpeg@2x.png"
            />
            <img
              className="group-767-1-1png-icon"
              alt=""
              src="/group76711png@2x.png"
            />
            <img className="hmcsfjpg-icon" alt="" src="/hmcsfjpg@2x.png" />
            <img
              className="net-workindiapng-icon"
              alt=""
              src="/networkindiapng@2x.png"
            />
            <img className="image-14png-icon" alt="" src="/image14png@2x.png" />
            <img className="newlogojpg-icon" alt="" src="/newlogojpg@2x.png" />
            <img
              className="screenshot-2022-07-13-at-155-icon"
              alt=""
              src="/screenshot20220713at15532pmpng@2x.png"
            />
            <img
              className="screenshot-2022-07-13-at-255-icon"
              alt=""
              src="/screenshot20220713at25544pmpng@2x.png"
            />
            <img
              className="screenshot-2022-07-13-at-301-icon"
              alt=""
              src="/screenshot20220713at30157pmpng@2x.png"
            />
            <img
              className="screenshot-2022-07-13-at-304-icon1"
              alt=""
              src="/screenshot20220713at30443pmpng@2x.png"
            />
            <img
              className="screenshot-2022-07-13-at-309-icon1"
              alt=""
              src="/screenshot20220713at30958pmpng@2x.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
