import DivfusionColumnWrapper from "./DivfusionColumnWrapper";
import React from "react";

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
            divfusionImageElement="programs-golden-logo.svg"
            quickLinksParent="40+"
            programs="Programs"
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/fa_globe.svg"
            quickLinksParent="80+"
            programs="Countries"
            propOverflow="unset"            
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/ph_users-three.svg"
            quickLinksParent="15k+"
            programs="Participants"
            propOverflow="unset"            
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/ep_school.svg"
            quickLinksParent="1k+"
            programs="Schools"
            propOverflow="unset"            
          />
        </div>
      </div>
    </section>
  );
};

export default ThePotentialToLearnForAM;
