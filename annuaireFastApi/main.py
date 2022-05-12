from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
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
                    "nom" : "AUGSBURGER", 
                    "prenom" : "Isabelle",
                    "adresse" : "Rue du Musée 6",
                    "localite" : "2000 Neuchâtel"
                },
                {
                    "nom" : "BLANDENIER",
                    "prenom" : "Christian",
                    "adresse" : "Impasse du Noyer 1",
                    "localite" : "2053 Cernier"
                },
                {
                    "nom" : "FELD",
                    "prenom" : "Laurent",
                    "adresse" : "Place de la Fontaine 4",
                    "localite" : "2034 Peseux"
                },
                {
                    "nom" : "GUILLEN",
                    "prenom" : "Lila",
                    "adresse" : "Rue Denis-de-Rougemont 3",
                    "localite" : "2108 Couvet"
                },
                {
                    "nom" : "OBRIST",
                    "prenom" : "Laurent",
                    "adresse" : "Rue de l'Hôpital 11",
                    "localite" : "2001 Neuchâtel"
                }
            ]
