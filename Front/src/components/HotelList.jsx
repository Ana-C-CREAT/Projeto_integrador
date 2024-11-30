import React from "react";

const HotelList = () => {
  const hotels = [
    { id: 1, name: "Hotel A", location: "Cidade A" },
    { id: 2, name: "Hotel B", location: "Cidade B" },
    { id: 3, name: "Hotel C", location: "Cidade C" },
  ];

  return (
    <div>
      <h2>Lista de Hotéis</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
