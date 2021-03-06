from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from repertoire import Repertoire

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
GET REQUESTS
"""

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

"""
POST REQUESTS
"""

# Post to a repertoire
@app.post("/repertoire/{id}")
async def postRepertoire(repertoire : Repertoire):
    repertoire_dict = repertoire.dict()
    nbVersions = repertoire.natureActe.__len__()
    for i in range(nbVersions):
        repertoire_dict["natureActe"][i] = repertoire.natureActe[i]


