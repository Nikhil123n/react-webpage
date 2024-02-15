import DivowlItem from "./DivowlItem";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <div className="carousel-img-catelog-grp-1">
        <div className="divowl-stage-outer">
          <DivowlItem
            link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
            heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
            startDateOctober21st="Start Date: October 21st"
            developSocialInnovationAn="Develop social innovation and"
            entrepreneurialSpirit="entrepreneurial spirit"
            rightArrowsvg="/rightarrowsvg@2x.png"
          />
          <DivowlItem
            link900x5502Aboutjpg="/link--900x550about4jpg@2x.png"
            heading5InnovationLeaders="Take The World Forward Fellowship"
            startDateOctober21st="Start Date: November 18th"
            developSocialInnovationAn="Creating the next generation of"
            entrepreneurialSpirit="changemakers"
            rightArrowsvg="/rightarrowsvg-1@2x.png"
            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
          />
          <DivowlItem
            link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
            heading5InnovationLeaders="The Leadership Competition"
            startDateOctober21st="Start Date: November 4th"
            developSocialInnovationAn={`Compete in challenges & develop`}
            entrepreneurialSpirit="project proposals"
            rightArrowsvg="/rightarrowsvg-2@2x.png"
            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
          />
        </div>
      </div>
      <div className="heading-cta">
        <h1 className="heading-1-container">
          <span>
            <p className="ivy-league-education">Ivy League Education</p>
            <p className="unbounded">Unbounded</p>
          </span>
        </h1>
        <div className="future-doctors-event-info-grou">
          <div className="learn-with-the">{`Learn with the World’s Best Teachers, Mentors & Students`}</div>
          <button className="button">
            <div className="get-started">Get Started</div>
            <img
              className="vector-1-1png-icon"
              alt=""
              src="/vector11png@2x.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
