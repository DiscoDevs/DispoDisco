import React from "react";

import { Badge } from "./Badge";

export default {
  title: "DispoDisco/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Standard",
  type: "default",
};

export const Cargo = Template.bind(0);
Cargo.args = {
  type: "cargo",
};
export const Kutsche = Template.bind(0);
Kutsche.args = {
  type: "kutsche",
};
export const Direkt = Template.bind(0);
Direkt.args = {
  type: "direct",
};
export const Termin = Template.bind(0);
Termin.args = {
  type: "termin",
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
