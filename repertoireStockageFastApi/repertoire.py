from typing import List, Optional
from pydantic import BaseModel

class Repertoire(BaseModel):
    noOrdre: str
    dateActe: str 
    minutaireNo: Optional[str] = None
    minuteNo: Optional[str] = None
    natureActe: List[str]
    signatures: List[str]