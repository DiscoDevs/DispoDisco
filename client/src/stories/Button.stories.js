import React from "react";
import { PlusButton } from "./PlusButton";
export default {
  title: "DispoDisco/Button",
  component: PlusButton,
};

const Template = (args) => <PlusButton {...args} />;

export const PlusButtons = Template.bind({});
PlusButton.args = {
  type: "round",
};
