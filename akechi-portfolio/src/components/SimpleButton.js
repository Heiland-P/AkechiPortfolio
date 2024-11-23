import React from "react";

import "../css/GeneralStyle.css";
import "../css/SimpleButtonStyle.css";

const SimpleButton = ({
  text,
  text_color = "red",
  hover_text_color = "red",
  bg_color = "blue",
  text_size = "16px",
}) => {
  return (
    <button
      className="SimpleButton TitleText"
      style={{
        "--text-color": text_color,
        "--hover-text-color": hover_text_color,
        "--text-size": text_size,
      }}
    >
      <div class="backgroundShape">
        <svg
          viewBox="0 0 108.1 47"
          preserveAspectRatio = "none"
        >
          <polygon
            fill = {bg_color}
            points="10,8.5 150.7,0 108.1,32.7 0,47 "
          />
        </svg>
      </div>

      {text}
    </button>
  );
};

export default SimpleButton;
