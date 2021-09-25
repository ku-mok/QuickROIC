import ColumnFilterModal, { ColumnFilterModalProps } from "./ColumnFilterModal";
import { Story, Meta } from "@storybook/react";

export default {
  component: ColumnFilterModal,
  title: "ColumnFilterModal",
} as Meta;

const Template: Story<ColumnFilterModalProps> = (args) => (
  <ColumnFilterModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  columns: ["c1", "c2", "c3"],
  filter: ["c3"],
  handleFilterChange: (c: string | string[]) => {},
  open: true,
  onClose: () => {},
};
