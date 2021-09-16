from fastapi import FastAPI
from graphene import Schema
from starlette.graphql import GraphQLApp
from api import Query

app = FastAPI()
app.add_route("/", GraphQLApp(schema=Schema(query=Query)))
