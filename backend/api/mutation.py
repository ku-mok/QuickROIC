from graphene.types.field import Field
from graphene.types.structures import List
from api.object import CompanyData
from roic.transform import dataframe_to_dict, speeda_excel_to_dataframe
from graphene import Mutation, Boolean, ObjectType
from graphene_file_upload.scalars import Upload
from tempfile import NamedTemporaryFile


class FileUploadMutation(Mutation):
    class Arguments:
        file = Upload(required=True)
    ok = Boolean()
    company_data = Field(List(CompanyData))

    async def mutate(self, info, file):
        with NamedTemporaryFile(delete=True) as tmp_file:
            file_content = await(file.read())
            tmp_file.write(file_content)
            df = speeda_excel_to_dataframe([tmp_file.name])
            data = dataframe_to_dict(df)
        return FileUploadMutation(ok=True, company_data=data)


class Mutation(ObjectType):
    upload_speeda_excel = FileUploadMutation.Field()
