from fastapi import FastAPI
from api import schema
from starlette.graphql import GraphQLApp

app = FastAPI()
app.add_route("/", GraphQLApp(schema=schema))
