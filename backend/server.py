from fastapi import FastAPI
from starlette.graphql import GraphQLApp
from api import schema

app = FastAPI()
app.add_route("/", GraphQLApp(schema=schema))
