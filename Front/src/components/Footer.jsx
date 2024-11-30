import React from "react";
import styles from "../static/css/Footer.module.css"; // Certifique-se de que o caminho está correto

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Pousada Quinta do Ypuá - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;