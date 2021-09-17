from fastapi import FastAPI
from starlette_graphene3 import GraphQLApp
from api import schema

app = FastAPI()
app.add_route("/", GraphQLApp(schema=schema))
