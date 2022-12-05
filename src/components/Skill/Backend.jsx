import React from "react";
import Item from "./Item";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <Item name="Node.JS" />
          <Item name="MongoDB" />
        </div>

        <div className="skills__group">
          <Item name="Express" />
          <Item name="MySQL" />
        </div>
      </div>
    </div>
  );
};
export default Backend;
