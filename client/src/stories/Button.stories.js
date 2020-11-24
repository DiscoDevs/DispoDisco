import React from "react";
import { ButtonPlus } from "./ButtonPlus";
export default {
  title: "DispoDisco/Button",
  component: ButtonPlus,
};

const Template = (args) => <ButtonPlus {...args} />;

export const PlusButtons = Template.bind({});
ButtonPlus.args = {
  type: "round",
};
