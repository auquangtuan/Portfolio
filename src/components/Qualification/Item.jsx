import React from "react";

const Item = ({ name, des, time, left }) => {
  return (
    <div className="qualification__data">
      {left ? (
        <>
          <div>
            <h3 className="qualification__title">{name}</h3>
            <span className="qualification__subtitle">{des}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i> {time}
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{name}</h3>
            <span className="qualification__subtitle">{des}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i> {time}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
