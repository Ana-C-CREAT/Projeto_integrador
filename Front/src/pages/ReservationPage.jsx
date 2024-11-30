    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";
    import styles from "../static/css/ReservationPage.module.css";

    const ReservationPage = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [customerName, setCustomerName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/rooms/info");
            setRooms(response.data.rooms_info);
        } catch (error) {
            setError("Erro ao carregar os quartos.");
            console.error(error);
        }
        };
        fetchRooms();
    }, []);

    const handleReservation = async (e) => {
        e.preventDefault();

        if (!selectedRoom) {
        setError("Por favor, selecione um quarto.");
        return;
        }

        if (!customerName) {
        setError("Por favor, insira o nome do cliente.");
        return;
        }

        const reservationData = {
        id: selectedRoom.id,
        room_id: selectedRoom.id,
        customer_name: customerName,
        };

        console.log("Reservando quarto:", reservationData);

        try {
        const response = await axios.post("http://127.0.0.1:8000/reservations", reservationData);
        alert(`Reserva realizada com sucesso! ID da reserva: ${response.data.reservation_id}`);
        navigate("/");
        } catch (error) {
        if (error.response) {
            setError(error.response.data.detail);
        } else {
            setError("Erro ao tentar realizar a reserva.");
        }
        }
    };

    return (
        <div className={styles.reservationPage}>
        <h1>Faça Sua Reserva</h1>
        {error && <p className={styles.error}>{typeof error === "object" ? JSON.stringify(error) : error}</p>}
    
        <form onSubmit={handleReservation} className={styles.reservationForm}>
            <div className={styles.field}>
            <label htmlFor="room">Escolha o Quarto:</label>
            <select
                id="room"
                value={selectedRoom ? selectedRoom.id : ""}
                onChange={(e) => {
                const roomId = e.target.value;
                const room = rooms.find((r) => r.id === parseInt(roomId));
                setSelectedRoom(room);
                }}
                required
            >
                <option value="">Selecione um quarto</option>
                {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                    {room.name} - R$ {room.price_per_night} - {room.quantity} disponíveis
                </option>
                ))}
            </select>
            </div>

            <div className={styles.field}>
            <label htmlFor="customerName">Nome do Cliente:</label>
            <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            </div>
    
            <button type="submit" className={styles.submitButton}>Reservar</button>
        </form>
        </div>
    );
    };

    export default ReservationPage;