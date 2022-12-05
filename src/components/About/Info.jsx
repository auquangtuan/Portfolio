import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Kinh Nghiệm</h3>
        <span className="about__subtitle">2 tháng thực tập</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Hoàn Thành</h3>
        <span className="about__subtitle">4+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
