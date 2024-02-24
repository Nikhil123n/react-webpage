import { useMemo, useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Img1.css";

const Img1 = ({
  catelogImg1,
  heading,
  studentsConceptualizedNov,
  propPadding,
  propBackgroundImage,
  propHeight,
  galleryUrl,
  galleryEventName,
}) => {
  const img1Style = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  const studentsConceptualizedNovelStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);  
  // console.log(galleryEventName)


  const navigate = useNavigate();
  // const onCardClick = useCallback(() => {
  //   navigate( galleryUrl, {
  //     state: {galleryEventName}
  //   });
  // }, [navigate]);



  const onButtonClick = (sectionId) => {
    if (sectionId === 'gallery-events') {
      navigate(`/gallery/gallery-events`);
    } else {
      navigate(`/gallery/gallery-events#${sectionId}`, {
        state: galleryEventName
      });
      
    }
  };



  return (
    <div className="img-1" style={img1Style} onClick={ () => onButtonClick('in-school-programs')} >
      <img className="catelog-img-1" alt="" src={catelogImg1} />
      <div className="img-overlay-1" />
      <div className="programs1">
        <div className="heading1">{heading}</div>
      </div>
      <div
        className="students-conceptualized-novel"
        style={studentsConceptualizedNovelStyle}
      >
        {studentsConceptualizedNov}
      </div>
    </div>
  );
};

export default Img1;
