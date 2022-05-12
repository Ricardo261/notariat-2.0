from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:8080",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to repertoireStockageFastApi"}

# Get by id
@app.get("/repertoire/{id}")
async def getById(id: int):
    return getRepertoireById(id)

def getRepertoireById(id): 
    return "Rendu visuel du répertoire identifié par l'id : " + str(id)