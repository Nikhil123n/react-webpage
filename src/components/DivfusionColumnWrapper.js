import { useMemo } from "react";
import "./DivfusionColumnWrapper.css";

const DivfusionColumnWrapper = ({
  divfusionImageElement,
  quickLinksParent,
  programs,
  propOverflow,
  propPadding,
}) => {
  const divfusionColumnWrapperStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      padding: propPadding,
    };
  }, [propOverflow, propPadding]);

  return (
    <div
      className="divfusion-column-wrapper"
      style={divfusionColumnWrapperStyle}
    >
      <img
        className="divfusion-image-element-icon"
        loading="eager"
        alt=""
        src={divfusionImageElement}
      />
      <div className="quick-links">
        <div className="media-contact-us-about-us-link">
          <div className="quick-links-parent">{quickLinksParent}</div>
          <div className="programs2">{programs}</div>
        </div>
      </div>
    </div>
  );
};

export default DivfusionColumnWrapper;
