from urllib.parse import parse_qs

import aiohttp
from fastapi import FastAPI
from github import Github
from pydantic import BaseModel
from starlette.responses import JSONResponse, RedirectResponse

app = FastAPI()


class User(BaseModel):
    email: str
    password: str


@app.post('/api/login')
async def login(user: User):
    print('q')
    print(user)
    return JSONResponse({'user': user.email, 'token': 'test'})


@app.post('/api/register')
async def register(user: User):
    print('q')
    print(user)
    return JSONResponse({'user': user.email, 'token': 'test'})
