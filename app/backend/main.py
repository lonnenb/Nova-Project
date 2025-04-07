from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS erlauben (für Vue im Frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # im echten Einsatz auf deine Domain begrenzen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BalanceResponse(BaseModel):
    balance: float

@app.get("/api/balances", response_model=BalanceResponse)
def get_balance():
    # Beispielwert – kann später aus DB kommen
    return {"balance": 12345.67}
