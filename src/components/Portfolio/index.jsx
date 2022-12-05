import React from 'react';
import Portfolios from './Portfolios';
import './style.scss'
const Portfolio = () => {
    return (
        <section className="work section" id="portfolio">
          <h2 className="section__title">Dự Án Cá Nhân</h2>
          <span className="section__subtitle">Dự án đã hoàn thành</span>
          <Portfolios />
        </section>
      )
}

export default Portfolio;