import DivcolLg1 from "./DivcolLg1";
import "./EventImgOverlay.css";

const EventImgOverlay = () => {
  return (
    <div className="event-img-overlay">
      <div className="impact-and-research-fellowship">
        <div className="divowl-controls">
          <img
            className="left-arrowsvg-icon"
            loading="eager"
            alt=""
            src="/leftarrowsvg.svg"
          />
          <img
            className="right-arrowsvg-icon4"
            alt=""
            src="/rightarrowsvg-12.svg"
          />
        </div>
      </div>
      <div className="input-text">
        <div className="event-list">
          <img
            className="whatsapp-image-2023-07-14-at-0-icon"
            loading="eager"
            alt=""
            src="/whatsappimage20230714at011517scaledjpg@2x.png"
          />
          <div className="link-fellowships">corporate internship</div>
        </div>
        <div className="divcol-lg-5-wrapper">
          <DivcolLg1 />
        </div>
      </div>
    </div>
  );
};

export default EventImgOverlay;
