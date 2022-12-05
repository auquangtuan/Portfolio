import React from "react";
import ItemSmall from "./ItemSmall";

const Item = ({ name, des, para, toggle, number, handleClick }) => {
  return (
    <div className="services__content">
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">{name}</h3>
      </div>

      <span className="services__button" onClick={() => handleClick(number)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggle === number
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => handleClick(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">{name}</h3>
          <p className="services__modal-description">{des}</p>

          <ul className="services__modal-services grid">
            <ItemSmall paragraph={para} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
