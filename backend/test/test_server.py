import unittest
from fastapi.testclient import TestClient
from api.server import app


client = TestClient(app)


class ServerTest(unittest.TestCase):
    def test_graphql_endpoint(self):
        response = client.get("/graphql")
        assert response.status_code == 200
