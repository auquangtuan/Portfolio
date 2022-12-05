import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.scss";
const HomePage = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default HomePage;
