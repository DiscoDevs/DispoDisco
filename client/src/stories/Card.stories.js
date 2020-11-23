import React from "react";
import { Badge } from "./Badge";
// import { Cargo as Badge } from "./Badge.stories";

import { Card } from "./Card";

export default {
  title: "DispoDisco/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const NormalRide = Template.bind();
NormalRide.args = {
  labels: (
    <>
      <Badge type="cargo" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const DayRide = Template.bind();
DayRide.args = {
  type: "dayRide",
  labels: (
    <>
      <Badge type="cargo" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const DirectRide = Template.bind();
DirectRide.args = {
  type: "direct",
  labels: (
    <>
      <Badge type="cargo" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const OnTimeRide = Template.bind();
OnTimeRide.args = {
  type: "onTimeRide",
  labels: (
    <>
      <Badge type="cargo" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const ConcurrentRide = Template.bind();
ConcurrentRide.args = {
  type: "concurrentRide",
};
