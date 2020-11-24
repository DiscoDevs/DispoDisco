import React from "react";

import { Input } from "./Input";

export default {
  title: "DispoDisco/Input",
  component: "Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind(0);
Default.args = {
  type: "text",
};
