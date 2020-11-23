import React from "react";
import { Button } from "./Button";
export default {
  title: "DispoDisco/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PlusButton = Template.bind({});
PlusButton.args = {
  type: "round",
};
