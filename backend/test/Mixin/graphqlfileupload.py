import json
DEFAULT_GRAPHQL_URL = "/graphql/"


def file_graphql_query(
        query, op_name=None, input_data=None, variables=None,
        headers=None, files=None, client_post=None, graphql_url=None,
):
    if not files:
        raise ValueError('Missing required argument "files".')

    if not client_post:
        raise ValueError('Missing required argument "client_post".')

    headers = headers or {}
    variables = variables or {}
    graphql_url = graphql_url or DEFAULT_GRAPHQL_URL
    map_ = {}

    for key in files.keys():
        map_[key] = ['variables.{key}'.format(key=key)]
        if key not in variables:
            variables[key] = None

    body = {'query': query}
    if op_name:
        body['operationName'] = op_name
    if variables:
        body['variables'] = variables
    if input_data:
        if 'variables' in body:
            body['variables']['input'] = input_data
        else:
            body['variables'] = {'input': input_data}

    data = {
        'operations': json.dumps(body),
        'map': json.dumps(map_),
    }
    if headers:
        resp = client_post(graphql_url, data, files ** headers)
    else:
        resp = client_post(graphql_url, data, files)

    return resp


class GraphQLFileUploadTestMixin:
    """GraphQL file upload test mixin."""

    # URL to graphql endpoint
    GRAPHQL_URL = DEFAULT_GRAPHQL_URL

    def file_query(
            self, query, op_name=None, input_data=None, files=None,
            variables=None, headers=None,
    ):
        return file_graphql_query(
            query,
            op_name=op_name,
            input_data=input_data,
            variables=variables,
            headers=headers,
            files=files,
            client_post=self.client_post,
            graphql_url=self.GRAPHQL_URL,
        )

    def assertResponseNoErrors(self, resp, msg=None):  # pylint: disable=C0103
        content = json.loads(resp.content)
        self.assertEqual(resp.status_code, 200, msg or content)
        self.assertNotIn("errors", list(content.keys()), msg or content)

    def assertResponseHasErrors(self, resp, msg=None):  # pylint: disable=C0103
        content = json.loads(resp.content)
        self.assertIn("errors", list(content.keys()), msg or content)
