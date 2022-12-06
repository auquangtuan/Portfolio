import React from "react";
import "./style.scss";
import Profile from "../../assets/profile.jpg";
import CV from "../../assets/auquangtuan.pdf";
import Info from "./Info";
import Files from "../../assets/files";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Về Bản Thân</h2>
      <span className="section__subtitle">Một giới thiệu sơ bộ</span>
      <div className="about__container container grid">
        <img src={Profile} alt="Profile" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">Chào mọi người, mình là Tuấn, một người trái nghành theo đuổi Front-end developer. Sau nhiều năm bôn ba ở Sài Gòn, mình phát hiện rất thích code, thế là quyết tâm theo đuổi nó. Đến giờ cũng được một năm và tích lũy một số kến thức nhất định. Tin rằng có thể giúp ích cho công ty nhận Tuấn làm Fresher</p>
          <a download="" href={CV} className="button button--flex">
            Tải CV
            <Files color="var(--container-color)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
