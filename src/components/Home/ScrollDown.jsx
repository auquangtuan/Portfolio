import React from "react";
import Scroll from "../../assets/scroll";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scrool-button button--flex">
        <Scroll color="var(--title-color)" />
      </a>
      <span className="home__scroll-name">
            Lăn xuống để xem thêm
      </span>
      <i className="uil uil-arrow-down home__scroll-arrow"></i>
    </div>
  );
};

export default ScrollDown;
