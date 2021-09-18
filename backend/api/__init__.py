from .query import Query
from .mutation import Mutation
from graphene import Schema
schema = Schema(mutation=Mutation, query=Query)
