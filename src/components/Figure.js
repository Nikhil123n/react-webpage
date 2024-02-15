import { useMemo } from "react";
import "./Figure.css";

const Figure = ({
  whatsAppImage20230714At10,
  futureMUNLeadersByTheHarv,
  becomingABestDelegateASte,
  rightArrowsvg,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const figure1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const small1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="figure1" style={figure1Style}>
      <img
        className="whatsapp-image-2023-07-14-at-1-icon1"
        alt=""
        src={whatsAppImage20230714At10}
      />
      <div className="future-mun-leaders">{futureMUNLeadersByTheHarv}</div>
      <div className="small1" style={small1Style}>
        <div
          className="becoming-a-best-delegate-a-st-wrapper"
          style={frameDiv2Style}
        >
          <div className="becoming-a-best">{becomingABestDelegateASte}</div>
        </div>
      </div>
      <img className="right-arrowsvg-icon2" alt="" src={rightArrowsvg} />
    </div>
  );
};

export default Figure;
