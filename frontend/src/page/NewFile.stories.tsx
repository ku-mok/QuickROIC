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
Success.args = { acceptedFiles: [new File([], "Sample.xlsx")], success: true };
