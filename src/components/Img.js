import { useMemo } from "react";
import "./Img.css";

const Img = ({
  catelogImg1,
  heading,
  studentsCraftedCaptivatin,
  propPadding,
  propBackgroundImage,
}) => {
  const img4Style = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  return (
    <div className="img-4" style={img4Style}>
      <img className="catelog-img-11" alt="" src={catelogImg1} />
      <div className="img-overlay-11" />
      <div className="heading2">{heading}</div>
      <div className="students-crafted-captivating">
        {studentsCraftedCaptivatin}
      </div>
    </div>
  );
};

export default Img;
