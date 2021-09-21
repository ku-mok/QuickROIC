import UploadButton, { UploadButtonProps } from "./UploadButton";
import { Story, Meta } from "@storybook/react";

export default {
  component: UploadButton,
  title: "UploadButton",
} as Meta;

const Template: Story<UploadButtonProps> = (args) => (
  <UploadButton {...args}>SampleText</UploadButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disable: true };

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const Success = Template.bind({});
Success.args = { success: true, successText: "Success" };
