import Header, { HeaderProps } from "./Header";
import { Story, Meta } from "@storybook/react";

export default {
  component: Header,
  title: "Header",
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <Header {...args}>SampleTitle</Header>
);

export const Default = Template.bind({});
Default.args = {
  tabSelected: 1,
  tabItems: [
    { label: "Tab1", onClick: () => {} },
    { label: "Tab2", onClick: () => {} },
    { label: "Tab3", onClick: () => {} },
    { label: "Tab4", onClick: () => {}, disabled: true },
    { label: "Tab5", onClick: () => {}, disabled: true },
  ],
};
