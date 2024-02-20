import { useMemo } from "react";
import React from "react";

import "./DivfusionColumnWrapper.css";

const DivfusionColumnWrapper = ({
  divfusionImageElement,
  quickLinksParent,
  programs,
  propOverflow,
  propPadding,
  borderStyle,


}) => {
    const divfusionColumnWrapperStyle = useMemo(() => {
      const style = {
        overflow: propOverflow,
        padding: propPadding,
      };
    
      if (borderStyle) {
        style.border = '1px solid #4a4a4a'
        style.borderStyle = 'inset';
        style.borderRadius = '12px 12px 12px 12px;';
        style.boxShadow = 'none';
        style.borderColor = '#878d92';
      }
    
      return style;
    }, [propOverflow, propPadding, borderStyle]);
  

  const background = borderStyle ? {backgroundColor: 'rgba(0, 0, 0, 0)'} : { };

  return (
    <div
      className="divfusion-column-wrapper"
      style={{ ...divfusionColumnWrapperStyle, ...background }}
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
