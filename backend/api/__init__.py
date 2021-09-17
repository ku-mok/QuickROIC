from .query import Query
from graphene import Schema
schema = Schema(query=Query)
