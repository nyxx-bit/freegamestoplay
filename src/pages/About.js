import React from "react";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import logo from "../../img/logo512.png";

const About = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="content-section">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <h3>Kelompok 14</h3>
          <p>
            Masih belajar bang. Lorem ipsum Alkha sit amet, consectetur
            adipisicing Hana, sed do eiusmod Dika incididunt ut labore et dolore
            magna Wibawa. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut Reyhan ex ea commodo consequat.
          </p>
          <div className="button">
            <a href="https://linkedin.com/home">Read More</a>
          </div>
        </div>
        <div className="social">
          <a href="https://facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="image-section">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default About;
