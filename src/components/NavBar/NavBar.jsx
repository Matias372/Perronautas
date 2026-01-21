import { useState } from "react";
import logo from "../../../public/Resources/Logo.svg"; // Ajusta la ruta según tu estructura

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="H-container" className="header">
      <section className="header__logo-toggle">
        <a href="/Inicio">
          <img className="header__logo" src={logo} alt="Logo" width="100" />
        </a>
        <button
          id="menuButton"
          className="header__toggle-menu-btn"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </section>
      <section className={`header__menu ${menuOpen ? "open" : ""}`}>
        <nav className="header__nav" id="menu">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="/Inicio">Inicio</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/Clases">Clases</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/Cursos">Cursos</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="/Nosotros">Nosotros</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
