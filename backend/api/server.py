from fastapi import FastAPI
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from fastapi.middleware.cors import CORSMiddleware
from api import schema

origins = [
    "http://localhost:3000"
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/", GraphQLApp(schema, on_get=make_graphiql_handler()))
