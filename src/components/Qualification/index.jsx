import React from "react";
import Item from "./Item";
import "./style.scss";
const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Học Vấn và Kinh Nghiệm</h2>
      <span className="section__subtitle">Từ 2016 đến nay</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              "qualification__button qualification__active button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Học Vấn
          </div>

          <div
            className={
              "qualification__button qualification__active button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Kinh Nghiệm
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <Item
              name="Tốt nghiệp THPT"
              des="THPT Huỳnh Thúc Kháng. Đắk Lắk"
              time="2016"
              left
            />
            <Item
              name="Học xong khóa Front-end tại R2S"
              des="Khóa đào tạo 2 tháng ( có tự học trước đó)"
              time="6-2022 - 08-2022"
            />
          </div>
          <div className="qualification__content qualification__content-active">
            <Item
              name="Message Coffee"
              des="Bán Cafe mang đi tại Message Coffee"
              time="9-2016 - 2017"
              left
            />
            <Item
              name=" Sale ( Tiếp thị cafe ) tại các quán"
              des="DATHACO - Message Coffee"
              time="2018 - 2019"
            />
            <Item
              name="Nhân viên đóng gói, giao hàng"
              des="DATHACO - Message Coffee"
              time="2019 - 8-2021"
              left
            />
            <Item
              name="Thực tập Frontend ReactJS tại R2S"
              des="R2S"
              time="8-2022 - 10-2022"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
