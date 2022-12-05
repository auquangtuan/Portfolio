import React from "react";

const ItemSmall = ({ paragraph }) => {
  const para = paragraph.split(".");
  return (
    <>
      {para.map((item, index) => {
        return (
          <li className="services__modal-service" key={index}>
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info">{item}.</p>
          </li>
        );
      })}
    </>
  );
};

export default ItemSmall;
