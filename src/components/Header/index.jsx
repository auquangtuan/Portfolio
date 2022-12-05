import React from "react";
import { useState } from "react";
import "./style.scss";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          auquangtuan
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Trang Chủ
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Bản Thân
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Kĩ Năng
              </a>
            </li>
            <li className="nav__item">
              <a href="#swot" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Về Kĩ Năng
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#footer" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Liên Hệ
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(false)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
