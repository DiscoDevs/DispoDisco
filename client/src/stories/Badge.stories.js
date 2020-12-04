import React from "react";

import Badge from "../components/Badge";
export default {
  title: "DispoDisco/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const CargoS = Template.bind({});
CargoS.args = {
  type: "cargoS",
};
export const CargoM = Template.bind({});
CargoM.args = {
  type: "cargoM",
};
export const CargoL = Template.bind({});
CargoL.args = {
  type: "cargoL",
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
  type: "onTimeRide",
};
