import { useMemo } from "react";
import "./Img1.css";

const Img1 = ({
  catelogImg1,
  heading,
  studentsConceptualizedNov,
  propPadding,
  propBackgroundImage,
  propHeight,
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

  return (
    <div className="img-1" style={img1Style}>
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
