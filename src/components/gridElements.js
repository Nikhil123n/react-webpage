import Figure1 from "./Figure1";
import Figure from "./Figure";
import React from "react";
import "./gridElements.css";
import DivowlItem from "./DivowlItem";

const GridElements = ({data}) => {
  console.log(data)

  return (
    <section className="figure-grid-wrapper">
        <div className="figure-grid-container">
            {/* <div className="figure-grid-item"> */}
            {/* {data.map((item, index) => (
              <Figure1
                key={index}
                whatsAppImage20230714At12={item.image}
                futureLawyersProgramByHar={item.programName}
                useThePowerOfLawToBringAb={item.description}
                rightArrowsvg="/rightarrowsvg-3.svg"
              />
            ))} */}

            {data.map((item, index) => (
              <DivowlItem
                link900x5502Aboutjpg={item.image}
                heading5InnovationLeaders={item.programName}
                // startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn={item.description}
                // entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
                className={{
                  width: 'auto',
                  overflow: 'hidden',
                  height: '380px',
                  borderRadius: 'var(--br-3xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  position: 'relative',
                  gap: 'var(--gap-xs)',
                  textAlign: 'left',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-inter)'
                }}
            />
            ))}
          
            {/* </div> */}
        </div>
    </section>
  );
};

export default GridElements;