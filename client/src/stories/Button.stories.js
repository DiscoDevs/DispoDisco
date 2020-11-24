import React from "react";
import { ButtonPlusImg } from "./ButtonPlus";
export default {
  title: "DispoDisco/Button",
  component: ButtonPlusImg,
};

const Template = (args) => <ButtonPlusImg {...args} />;

export const PlusButton = Template.bind({});
ButtonPlusImg.args = {
  type: "round",
};
