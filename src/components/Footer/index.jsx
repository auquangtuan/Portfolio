import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Liên hệ với Tuấn qua</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Về Tuấn
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Dự Án
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.messenger.com/t/Vetus.Novum"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="mailto:auquangtuan@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-gmail"></i>
          </a>

          <a
            href="https://www.github.com/auquangtuan"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <quote className="footer__quote">
          "Cây đại thụ, bắt đầu từ một cái mầm nhỏ. Đài cao chín tầng, khởi đầu từ một sọt đất. Hành trình vạn dặm, bắt đầu từ bước chân đầu tiên."<i> -Vô Danh</i>
        </quote>

        <span className="footer__copy">
          Copyright &#169;2022 All rights reserved | Made with &hearts; auquangtuan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
