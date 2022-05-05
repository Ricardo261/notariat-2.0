from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3001",
    "http://localhost:8080",
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
    return {"message": "Hello World"}


@app.get("/annuaire/notaires")
async def getNoateurs():
    return getNotaires()


@app.get("/annuaire/notaires/{prenom}")
async def getNotaire(prenom: str):
    nom = getNotaires().get(prenom.title())
    return (prenom.title() + " " + nom) if nom != None else "Notaire inconnu"


def getNotaires():
    return  [
                { 
                    "nom" : "Page", 
                    "prenom" : "Michel"
                },
                {
                    "nom" : "Dupond",
                    "prenom" : "Michel"
                },
                {
                    "nom" : "Frote",
                    "prenom" : "Michel"
                }
            ]
