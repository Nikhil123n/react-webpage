import { useMemo, useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Figure.css";

const Figure = ({
  whatsAppImage20230714At10,
  futureMUNLeadersByTheHarv,
  becomingABestDelegateASte,
  rightArrowsvg,
  propPadding,
  propAlignSelf,
  propFlex,
  card,
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

  const navigate = useNavigate();
  const onCardClick = useCallback(() => {
    navigate("/certificate-program",{
      state: {
        state: card ? card : "The Leadership Competition by the Harvard MUN Team"
      }
    });
  }, [navigate]);


  return (
    <div className="figure1" style={figure1Style} onClick={onCardClick}>
      <img
        className="whatsapp-image-2023-07-14-at-1-icon1"
        alt=""
        src={whatsAppImage20230714At10}
      />
      <div class="img-overlay-1"></div>
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
