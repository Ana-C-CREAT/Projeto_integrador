from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
import json
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JSON_FILE = "users.json"
ROOMS_FILE = "rooms.json"
RESERVATIONS_FILE = "reservations.json"

class User(BaseModel):
    id: int
    name: str
    email: str
    password: Optional[str] = None

class LoginRequest(BaseModel):
    email: str
    password: str

class Room(BaseModel):
    id: int
    name: str
    price_per_night: float
    capacity: int
    available: bool
    description: Optional[str]
    quantity: int
    
class Reservation(BaseModel):
    id: int
    room_id: int
    customer_name: str

def load_data(file_name):
    try:
        with open(file_name, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []

def save_data(file_name, data):
    with open(file_name, "w") as file:
        json.dump(data, file, indent=4)

@app.post("/login")
def login(request: LoginRequest):
    """
    Rota para login de usuário.
    Recebe email e senha no corpo da requisição.
    """
    users = load_data(JSON_FILE)
    for user in users:
        if user["email"] == request.email and user.get("password") == request.password:
            return {"message": "Login successful", "user_id": user["id"]}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/users")
def create_user(user: User):
    """
    Rota para criar um novo usuário.
    Recebe os dados do usuário no corpo da requisição.
    """
    users = load_data(JSON_FILE)
    if any(u["id"] == user.id for u in users):
        raise HTTPException(status_code=400, detail="User ID already exists")
    users.append(user.dict())
    save_data(JSON_FILE, users)
    return user

@app.get("/users", response_model=List[User])
def list_users():
    """
    Rota para listar todos os usuários cadastrados.
    """
    return load_data(JSON_FILE)

@app.get("/rooms", response_model=List[Room])
def get_rooms():
    """
    Rota para listar todos os quartos.
    """
    data = load_data(ROOMS_FILE)
    return data["rooms"]

@app.get("/rooms/info")
def get_rooms_info():
    """
    Rota para listar todos os quartos e a quantidade de quartos restantes.
    """
    data = load_data(ROOMS_FILE)
    rooms = data["rooms"]
    rooms_info = [{"id": room["id"], "name": room["name"], "price_per_night": room["price_per_night"] , "available": room["available"] , "quantity": room["quantity"]} for room in rooms]
    return {"rooms_info": rooms_info}

@app.post("/reservations")
def create_reservation(reservation: Reservation):
    data = load_data(ROOMS_FILE)
    rooms = data["rooms"]
    reservations = load_data(RESERVATIONS_FILE)

    # Validar se o quarto existe
    room = next((r for r in rooms if r["id"] == reservation.room_id), None)
    if not room:
        raise HTTPException(status_code=404, detail="Room not found")

    # Adicionar nova reserva
    new_reservation = reservation.dict()
    new_reservation["id"] = len(reservations) + 1
    reservations.append(new_reservation)
    room["quantity"] -= 1

    # Salvar os dados atualizados
    save_data(ROOMS_FILE, data)
    save_data(RESERVATIONS_FILE, reservations)

    return {"message": "Reservation created successfully", "reservation_id": new_reservation["id"]}

@app.get("/reservations", response_model=List[Reservation])
def get_reservations():
    return load_data(RESERVATIONS_FILE)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)