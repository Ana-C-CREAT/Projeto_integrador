import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../static/css/LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("auth", "true");
        localStorage.setItem("userId", data.user_id);
        navigate("/home");
      } else {
        const error = await response.json();
        setError(error.detail || "Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      setError("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          <div className={styles.welcomeBox}>
            <h2>Pousada Quinta do Ypuá</h2>
            <p>Bem-vindo de volta!</p>
            <p>Acesse sua conta agora mesmo.</p>
            <button className={styles.btnPrimary}>Entrar</button>
            <a href="/" className={styles.forgotPassword}>Esqueci minha senha.</a>
          </div>
          <div className={styles.loginBox}>
            <h2>Faça seu login</h2>
            <p>Preencha seus dados</p>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>
            <p>
              Não possui login?{" "}
              <a href="/register" className={styles.registerLink}>
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
