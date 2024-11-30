import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import "@fontsource/inter";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import ReservationPage from "./pages/ReservationPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/accommodations" element={<ProtectedRoute><RoomsPage /></ProtectedRoute>} />
          <Route path="/reservar/:id" element={<ReservationPage />} />
          <Route path="/about" 
            element={<AboutPage />}
          />
          <Route path="contact" element={<ContactPage />} />
          {/* Rota para a página Sobre */}
          <Route
            path="/sobre"
            element={<h1>Página Sobre - Em construção</h1>}
          />
          
          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
        <Footer />
      </Router>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    </AuthProvider>
  );
};

export default App;
