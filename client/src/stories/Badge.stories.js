import React from "react";

import { Badge } from "../components/Badge";
export default {
  title: "DispoDisco/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Cargo = Template.bind({});
Cargo.args = {
  type: "cargo",
};
export const Carriage = Template.bind({});
Carriage.args = {
  type: "carriage",
};
export const Direkt = Template.bind({});
Direkt.args = {
  type: "direct",
};
export const OnTime = Template.bind({});
OnTime.args = {
  type: "onTime",
};
