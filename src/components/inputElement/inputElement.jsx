import React from "react";
import "./inputElement.css";

const inputElement = ({ zoom, title, setTitle, setZoom }) => {
  return (
    <div>
      <input
        style={{ margin: "20px" }}
        type="range"
        value={zoom}
        name="fontSize"
        min={20}
        max={70}
        onChange={(e) => setZoom(e.target.value)}
      />
      <input
        style={{ margin: "20px", fontSize: "22px" }}
        type="text"
        value={title}
        name="color"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default inputElement;
