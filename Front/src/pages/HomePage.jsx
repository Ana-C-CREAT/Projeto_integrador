import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../static/css/HomePage.module.css";
import logo from "../static/assets/logo.svg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.svgContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="80"
            height="80"
            className={styles.heroSvg}
          >
            <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="4" fill="#fff" />
            <image href={logo} x="16" y="16" height="32" width="32" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <h2>Bem-vindo à Pousada Quinta do Ypuá</h2>
          <p>Descubra conforto, tranquilidade e natureza em um só lugar.</p>
          <button
            className={styles.btnPrimary}
            onClick={() => navigate("/rooms")}
          >
            Verificar Reservas
          </button>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2>Sobre Nós</h2>
        <p>
          Localizada em meio à natureza, nossa pousada oferece uma experiência
          única de relaxamento e conforto. Ideal para quem busca fugir do
          agito da cidade e desfrutar da paz.
        </p>
      </section>

      <section id="accommodations" className={styles.section}>
        <h2>Acomodações</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Suíte Luxo</h3>
            <p>Conforto e sofisticação para momentos inesquecíveis.</p>
          </div>
          <div className={styles.card}>
            <h3>Suíte Família</h3>
            <p>Ampla e ideal para viagens em grupo ou com a família.</p>
          </div>
          <div className={styles.card}>
            <h3>Suíte Standard</h3>
            <p>Praticidade e economia para a sua estadia.</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contato</h2>
        <p>Email: contato@quinta-ypua.com</p>
        <p>Telefone: (99) 99999-9999</p>
      </section>
    </div>
  );
};

export default HomePage;
