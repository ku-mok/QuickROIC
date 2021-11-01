from graphene.types.field import Field
from graphene.types.structures import List
from api.object import CompanyData
from roic.transform import dataframe_to_dict, speeda_excel_to_dataframe
from graphene import Mutation, Boolean, ObjectType, NonNull
from graphene_file_upload.scalars import Upload
from tempfile import NamedTemporaryFile, _TemporaryFileWrapper


class FileUploadMutation(Mutation):
    class Arguments:
        files = List(Upload)
    ok = Boolean()
    company_data = Field(NonNull(List(NonNull(CompanyData))))

    async def mutate(self, info, files):
        tmp_file_list: list[_TemporaryFileWrapper] = []
        for file in files:
            file_content = await(file.read())
            tmp_file = NamedTemporaryFile()
            tmp_file.write(file_content)
            tmp_file_list.append(tmp_file)
        try:
            df = speeda_excel_to_dataframe([f.name for f in tmp_file_list])
            data = dataframe_to_dict(df)
        except Exception as e:
            raise e
        finally:
            for t in tmp_file_list:
                t.close()
        return FileUploadMutation(ok=True, company_data=data)


class Mutation(ObjectType):
    upload_speeda_excel = FileUploadMutation.Field()
