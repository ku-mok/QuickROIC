import CompanySetting, { CompanySettingProps } from "./CompanySetting";
import { Story, Meta } from "@storybook/react";

export default {
  component: CompanySetting,
  title: "CompanySetting",
} as Meta;

const Template: Story<CompanySettingProps> = (args) => (
  <CompanySetting {...args} />
);

export const Default = Template.bind({});
Default.args = {
  companies: [
    {
      name: "Sample1",
      color: "#ff0000",
      visibility: true,
      setColor: (c) => {},
      setVisibility: (v) => {},
    },
    {
      name: "Sample2",
      color: "#00ff00",
      visibility: true,
      setColor: (c) => {},
      setVisibility: (v) => {},
    },
    {
      name: "Sample3",
      color: "#0000ff",
      visibility: false,
      setColor: (c) => {},
      setVisibility: (v) => {},
    },
  ],
};
