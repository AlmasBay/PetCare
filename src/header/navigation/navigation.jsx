import React from "react";
import { Link } from "react-scroll";
import "./navigation.css";
import logo from "../../assets/paw.png";

const Navigation = () => {
  return (
    <div className="Navigation">
      <img src={logo} alt="Логотип" className="logo" />
      <p className="logo-text">PetCare</p>
      <nav className="Nav">
      <Link to="main" smooth={true} duration={500} offset={-100}>Главная</Link>
      <Link to="about" smooth={true} duration={500} offset={-100}>О сайте</Link>
      <Link to="test" smooth={true} duration={500} offset={-100}>Тест</Link>
      <Link to="pets" smooth={true} duration={500} offset={-100}>Питомцы</Link>
      <Link to="gallery" smooth={true} duration={500} offset={-100}>Галерея</Link>
      <Link to="map" smooth={true} duration={500} offset={-100}>Карта</Link>
      <Link to="faq" smooth={true} duration={500} offset={-100}>FAQ</Link>

      </nav>
    </div>
  );
};

export default Navigation;
