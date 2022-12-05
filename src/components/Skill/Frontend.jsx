import React from "react";
import Item from "./Item";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <Item name="HTML" />
          <Item name="CSS" />
        </div>
        <div className="skills__group">
          <Item name="JavaScript" />
          <Item name="React JS" />
        </div>
      </div>
    </div>
  );
};
export default Frontend;
