import { NewFilePresProps, NewFilePres } from "./NewFile";
import { Story, Meta } from "@storybook/react";

export default {
  component: NewFilePres,
  title: "NewFilePage",
} as Meta;

const Template: Story<NewFilePresProps> = (args) => <NewFilePres {...args} />;

export const Default = Template.bind({});
Default.args = { acceptedFiles: [] };

export const FileSelected = Template.bind({});
FileSelected.args = { acceptedFiles: [new File([], "Sample.xlsx")] };

export const Loading = Template.bind({});
Loading.args = { acceptedFiles: [new File([], "Sample.xlsx")], loading: true };

export const Success = Template.bind({});
Success.args = {
  acceptedFiles: [new File([], "Sample.xlsx")],
  successText: "処理完了",
};

export const Error = Template.bind({});
Error.args = {
  acceptedFiles: [new File([], "Sample.xlsx")],
  errorText:
    "処理に失敗しました。対象のファイルを確認し、解決しない場合は対象のファイルと以下のメッセージを添えて連絡をください",
};
