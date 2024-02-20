import DivowlItem from "./DivowlItem";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import "./carousel.css";
// import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Carousel = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-header">
            <h2>Other Happenings This Month</h2>
            <div>Choose a program of your interest to begin your transformation journey</div>
        </div>
        <div className="carousel-outer">
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
            <DivowlItem
                link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn="Develop social innovation and"
                entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
            />
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
  );
};

export default Carousel;