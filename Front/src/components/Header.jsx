import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../static/css/Header.module.css";
import logo from "../static/assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/"); 
  };

  const isAuthenticated = localStorage.getItem("auth");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/home")}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={styles.navbar}>
          <a href="/home" className={styles.navLink}>Início</a>
          <a href="/about" className={styles.navLink}>Sobre</a>
          <a href="/accommodations" className={styles.navLink}>Acomodações</a>
          <a href="/contact" className={styles.navLink}>Contato</a>
          {isAuthenticated && (
            <button onClick={handleLogout} className={styles.logoutButton}>
              Sair
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
