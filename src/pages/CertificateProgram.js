import React from "react";
import NavigationLinks from "../components/NavigationLinks";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ConnectUs from "../components/ConnectUs";
import DivowlItem from "../components/DivowlItem";
import DivfusionColumnWrapper from "../components/DivfusionColumnWrapper"; 


const CertificateProgram = () => {
    const style = {backgroundColor: 'rgba(0, 0, 0, 0)' }
    const beAChangemakers = {alignSelf: 'baseline'}
    const background = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderStyle: 'inset',
        borderRadius: '12px 12px 12px 12px;',
        boxShadow: 'none',
        borderColor: '#878d92',
    }

    return (
        <div className="home">
          <section className="top-level">
            <div className="figma-logo">
              <NavigationLinks />                            
            </div>
          </section>    
          <section className="container">
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
          </section>

          <section className="the-potential-to-learn-for-a-m">
      <div className="s-7" style={style}>
        <div className="be-a-part-of-changemakers-now" style={beAChangemakers}>
          <h2 className="be-a-part">Awards & Recognition</h2>
          <div className="the-potential-to">
            Showcase your achievements to the world
          </div>
        </div>
        <div className="participants">
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement.svg"
            quickLinksParent="40+"
            programs="Programs"       
            propOverflow="unset"       
            borderStyle="true"
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-1.svg"
            quickLinksParent="80+"
            programs="Countries"
            propOverflow="unset"  
            borderStyle="true"
            
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-2.svg"
            quickLinksParent="15k+"
            programs="Participants"
            propOverflow="unset"   
            borderStyle="true"
            
          />
          <DivfusionColumnWrapper
            divfusionImageElement="/divfusionimageelement-3.svg"
            quickLinksParent="1k+"
            programs="Schools"
            propOverflow="unset"          
            borderStyle="true"
          />
        </div>
      </div>
    </section>
            
            <ConnectUs />
            <Footer />
        </div>

    );
}
export default CertificateProgram;