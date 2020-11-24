import React from "react";
import { ButtonPlus } from "../components/ButtonPlus";
export default {
  title: "DispoDisco/Button",
  component: ButtonPlus,
};

const Template = (args) => <ButtonPlus {...args} />;

export const PlusButton = Template.bind({});
ButtonPlus.args = {
  type: "round",
};
