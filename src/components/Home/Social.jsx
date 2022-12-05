import React from "react";
import "./style.scss";
const Social = () => {
  return (
    <div className="home__social">
      <a href="facebook.com" className="home__social-icon" target="_blank">
        <i className="uil uil-facebook"></i>
      </a>
      <a href="github.com" className="home__social-icon" target="_blank">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
