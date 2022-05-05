from fastapi import FastAPI

app = FastAPI()


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
    return {
        "Michel": "Page",
        "Albertine": "Dupont",
        "Ginette": "Petitpierre",
        "Albert": "Lao",
        "Marc": "Lilo"
    }
