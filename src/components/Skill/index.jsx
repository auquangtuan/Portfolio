import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./style.scss";
const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Kĩ Năng</h2>
      <span className="section__subtitle">Front-end (Advance). Backend (Basic)</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Skill;
