import NavigationLinks from "../components/NavigationLinks";
import Container from "../components/Container";
import DivFusionColumnWrapper1 from "../components/DivFusionColumnWrapper1";
import FutureDoctors from "../components/FutureDoctors";
import EventImgOverlay from "../components/EventImgOverlay";
import DivcolLg from "../components/DivcolLg";
import Timeline from "../components/Timeline";
import EventInfoGrid from "../components/EventInfoGrid";
import EventInfoAll from "../components/EventInfoAll";
import ThePotentialToLearnForAM from "../components/ThePotentialToLearnForAM";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
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
      <DivFusionColumnWrapper1 />
      <FutureDoctors />
      <section className="arrow-svg">
        <div className="event-img-overlay-parent">
          <EventImgOverlay />
          <DivcolLg />
          <Timeline />
        </div>
      </section>
      <EventInfoGrid />
      <EventInfoAll />
      <ThePotentialToLearnForAM />
      <FrameComponent />
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
