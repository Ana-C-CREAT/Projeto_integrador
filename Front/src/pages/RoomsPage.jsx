import React, { useState, useEffect } from "react";
import styles from "../static/css/RoomsPage.module.css";
import { useNavigate } from "react-router-dom";

// Importe das imagens
import suite from "../static/imgs/suite_com_cozinha.jpg";
import familia from "../static/imgs/chale familia.jpg";
import domo from "../static/imgs/domo.jpeg";
import charrua from "../static/imgs/charrua (bus).jpeg";
import cabana from "../static/imgs/cabana.jpg";
import overlander from "../static/imgs/estacionamento para overlanders.jpg";

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]); // Lista de quartos
  const [roomsLeft, setRoomsLeft] = useState(0); // Quantidade de quartos restantes
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Fazendo a chamada para a API que retorna os quartos e a quantidade de quartos restantes
        const response = await fetch("http://127.0.0.1:8000/rooms/info");
        if (response.ok) {
          const data = await response.json();
          setRooms(data.rooms_info || []); // Definindo os dados dos quartos
          setRoomsLeft(data.rooms_info.reduce((acc, room) => acc + room.quantity, 0)); // Calculando a quantidade total de quartos restantes
          console.log(data.rooms_info);
        } else {
          console.error("Erro ao carregar os quartos.");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  // Função para reservar um quarto
  const handleReservation = (roomId) => {
    alert(`Você selecionou o quarto ${roomId}. Redirecionando para a reserva...`);
    navigate(`/reservar/${roomId}`);
  };

  // Função para mapear a imagem do quarto
  const getImageForRoom = (roomName) => {
    const normalizedRoomName = roomName.toLowerCase().trim();
    switch (normalizedRoomName) {
      case "suite com cozinha":
        return suite;
      case "chale familia":
        return familia;
      case "domo":
        return domo;
      case "charrua (bus)":
        return charrua;
      case "cabana":
        return cabana;
      case "estacionamento para overlanders":
        return overlander;
      default:
        return null;
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!rooms || rooms.length === 0) {
    return <p>Nenhum quarto disponível no momento.</p>;
  }

  return (
    <div className={styles.roomsPage}>
      <h1 className={styles.title}>Quartos Disponíveis</h1>
      {/* Mostra a quantidade de quartos restantes */}
      {roomsLeft > 0 && (
        <p className={styles.roomsLeft}>
          Quartos restantes: {roomsLeft}
        </p>
      )}
      <div className={styles.roomsContainer}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.roomCard}>
            <img
              src={getImageForRoom(room.name)}
              alt={`Imagem do ${room.name}`}
              className={styles.roomImage}
            />
            <h2 className={styles.roomName}>{room.name}</h2>
            <p className={styles.roomDescription}>{room.description}</p>
            <p className={styles.roomCapacity}>
              Capacidade: {room.capacity} pessoa(s)
            </p>
            <p className={styles.roomPrice}>
              Preço por noite: R$
              {typeof room.price_per_night === "number" && !isNaN(room.price_per_night)
                ? room.price_per_night.toFixed(2)
                : "Preço indisponível"}
            </p>
            <p className={styles.roomStatus}>
              Status:{" "}
              <span
                className={room.available ? styles.available : styles.unavailable}
              >
                {room.available ? "Disponível" : "Indisponível"}
              </span>
            </p>
            {room.available && (
              <button
                className={styles.reserveButton}
                onClick={() => handleReservation(room.id)}
              >
                Reservar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
