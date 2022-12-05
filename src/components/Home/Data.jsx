import React from "react";
import Hand from "../../assets/hand";
import Send from "../../assets/send";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Âu Quang Tuấn
        <Hand />
      </h1>
      <h3 className="home__subtitle">Front-End Developer</h3>
      <p className="home__description">
        ReactJS Developer
      </p>
      <a href="mailto:auquangtuan@gmail.com" className="button button--flex">
        auquangtuan@gmail.com <Send color="var(--container-color)" />
      </a>
    </div>
  );
};

export default Data;
