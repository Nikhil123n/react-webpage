import DivcolLg1 from "./DivcolLg1";
import "./DivcolLg.css";

const DivcolLg = () => {
  return (
    <div className="divcol-lg-12">
      <img
        className="whatsapp-image-2023-07-14-at-0-icon1"
        alt=""
        src="/whatsappimage20230714at011517scaledjpg-1@2x.png"
      />
      <div className="into-arrow-svg">
        <DivcolLg1 propFlex="unset" propAlignSelf="stretch" />
        <img className="left-arrowsvg-icon1" alt="" src="/leftarrowsvg.svg" />
        <img
          className="right-arrowsvg-icon5"
          alt=""
          src="/rightarrowsvg-12.svg"
        />
      </div>
      <div className="link-fellowships1">Fellowships</div>
    </div>
  );
};

export default DivcolLg;
