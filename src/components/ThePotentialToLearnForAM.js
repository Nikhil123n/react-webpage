import DivfusionColumnWrapper from "./DivfusionColumnWrapper";
import "./ThePotentialToLearnForAM.css";

const ThePotentialToLearnForAM = () => {
  return (
    <section className="the-potential-to-learn-for-a-m">
      <div className="s-7">
        <div className="be-a-part-of-changemakers-now">
          <h2 className="be-a-part">Be a part of 15,000+ changemakers now!</h2>
          <div className="the-potential-to">
            The potential to learn for a middle and high school student is
            limitless
          </div>
        </div>
        <div className="participants">
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement.svg"
            quickLinksParent="40+"
            programs="Programs"
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-1.svg"
            quickLinksParent="80+"
            programs="Countries"
            propOverflow="unset"
            propPadding="0px 30px 428px 20px"
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-2.svg"
            quickLinksParent="15k+"
            programs="Participants"
            propOverflow="unset"
            propPadding="0px 30px 428px 20px"
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-3.svg"
            quickLinksParent="1k+"
            programs="Schools"
            propOverflow="unset"
            propPadding="0px 30px 428px 20px"
          />
        </div>
      </div>
    </section>
  );
};

export default ThePotentialToLearnForAM;
