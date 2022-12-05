import React, { useState } from "react";
import Item from "./Item";
import "./style.scss";

const Swot = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="swot">
      <h2 className="section__title">Sơ Bộ Về Kĩ Năng</h2>
      <span className="section__subtitle">Chịu khó và tử  tế .</span>

      <div className="services__container container grid">
        <Item
          name="Frontend Development"
          des="Đã có kinh nghiệm 2 tháng làm việc với dự án ReactJS."
          para={
            "Có thể học nhanh các thư viện ở mức độ cơ bản để đáp ứng công việc. Có kiến thức về Redux, Redux Toolkit, MUI. Có thể nhanh chóng học tập và tiếp thu những kiến thức mới để đáp ứng dự án. Chịu được áp lực công việc cao. Yêu thích tìm hiểu những thứ mới. Sẵn sàng học tập và làm việc theo yêu cầu công việc"
          }
          toggle={toggleState}
          number={1}
          handleClick={toggleTab}
        />
        <Item
          name="Backend Development"
          des="Having more than 1+ years of experience in Backend Development"
          para={
            "Có thể join vào dự án backend sử dụng NodeJS (Express). CRUD, authentication, authorize cơ bản. Có kiến thức cơ bản với các thư viện NodeJS( Express ) như sequelize, mongoose, JWT. Sẵn sàn ghọc tập và làm việc theo yêu cầu"
          }
          toggle={toggleState}
          number={2}
          handleClick={toggleTab}
        />
      </div>
    </section>
  );
};

export default Swot;
