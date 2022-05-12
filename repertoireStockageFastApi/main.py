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
    return {"message": "Welcome to the microservice repertoireStockageFastApi"}

# Get repertoire by id
@app.get("/repertoire/{id}")
async def getById(id: int):
    return getRepertoireById(id)

def getRepertoireById(id): 
    return "Répertoire identifié par l'id : " + str(id)

# Get content by repertoire id and num ordre 
@app.get("/repertoire/{id}/{numOrdre}")
async def getNumOrdre(id: int, numOrdre: int):
    return getRepertoireById(id) + ", rendu du numéro d'ordre " + str(numOrdre)

# Get signatures by repertoire id and num ordre 
@app.get("/repertoire/{id}/{numOrdre}/signatures")
async def getSignatures(id: int, numOrdre: int):
    return "Signatures pour le " + getRepertoireById(id) + ", numéro d'ordre " + str(numOrdre)