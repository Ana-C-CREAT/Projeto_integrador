import React from "react";
import styles from "../static/css/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Entre em Contato Conosco</h1>
      <p>Para dúvidas, reservas ou informações adicionais, entre em contato através dos canais abaixo:</p>

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h3>Telefone:</h3>
          <p>(XX) XXXX-XXXX</p>
        </div>

        <div className={styles.contactItem}>
          <h3>E-mail:</h3>
          <p>contato@pousadex.com</p>
        </div>

        <div className={styles.contactItem}>
          <h3>Endereço:</h3>
          <p>Rua Exemplo, 123, Bairro, Cidade, Estado, CEP</p>
        </div>

        <div className={styles.contactItem}>
          <h3>Redes Sociais:</h3>
          <p>
            <a href="https://www.instagram.com/pousadex" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://www.facebook.com/pousadex" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
