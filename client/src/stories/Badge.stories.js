import React from "react";

import { Badge } from "../components/Badge";
import { NewBadge } from "../components/NewBadge";
export default {
  title: "DispoDisco/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;
const NewTemplate = (args) => <NewBadge {...args} />;

export const Cargo = NewTemplate.bind({});
Cargo.args = {
  type: "cargo",
};
export const Carriage = NewTemplate.bind({});
Carriage.args = {
  type: "carriage",
};
export const Direkt = NewTemplate.bind({});
Direkt.args = {
  type: "direct",
};
export const OnTime = NewTemplate.bind({});
OnTime.args = {
  type: "onTime",
};

export const Rider = Template.bind(0);
Rider.args = {
  type: "rider",
  label: "🚴‍♀️ Elena",
};
export const Timer = Template.bind(0);
Timer.args = {
  type: "timer",
  label: "1:30h",
};
export const Info = Template.bind(0);
Info.args = {
  type: "info",
};
