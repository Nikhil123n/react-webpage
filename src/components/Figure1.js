import { useMemo } from "react";
import "./Figure1.css";

const Figure1 = ({
  whatsAppImage20230714At12,
  futureLawyersProgramByHar,
  useThePowerOfLawToBringAb,
  rightArrowsvg,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const figureStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const smallStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="figure" style={figureStyle}>
      <img
        className="whatsapp-image-2023-07-14-at-1-icon"
        alt=""
        src={whatsAppImage20230714At12}
      />
      <div className="future-lawyers-program-by-har-wrapper">
        <div className="future-lawyers-program">
          {futureLawyersProgramByHar}
        </div>
      </div>
      <div className="small" style={smallStyle}>
        <div
          className="use-the-power-of-law-to-bring-wrapper"
          style={frameDiv1Style}
        >
          <div className="use-the-power">{useThePowerOfLawToBringAb}</div>
        </div>
      </div>
      <img className="right-arrowsvg-icon1" alt="" src={rightArrowsvg} />
    </div>
  );
};

export default Figure1;
