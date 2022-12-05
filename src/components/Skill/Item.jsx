import React from "react";

const Item = ({ name }) => {
  return (
    <div className="skills__data">
      <i class="bx bx-badge-check"></i>
      <div>
        <h3 className="skills__name">{name}</h3>
      </div>
    </div>
  );
};
export default Item;
