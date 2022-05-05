from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/annuaire/notaires")
async def getNotaires():
    return {
        "Michel": "Page",
        "Albertine": "Dupont",
        "Ginette": "Petitpierre",
        "Albert": "Lao",
        "Marc": "Lilo"
    }
