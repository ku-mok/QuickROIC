from graphene import ObjectType, Schema, String


class Query(ObjectType):
    hello = String(name=String(default_value="stranger"))

    def resolve_hello(self, info, name):
        return "Hello " + name


schema = Schema(query=Query)
