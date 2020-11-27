import React from "react";
import { Badge } from "../components/Badge";

import { Card } from "../components/Card";
import { CardButton } from "../components/CardButton";

export default {
  title: "DispoDisco/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;
const CardButtonTemplate = (args) => <CardButton {...args} />;

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

export const Rider = CardButtonTemplate.bind(0);
Rider.args = {
  type: "rider",
  label: "🚴‍♀️ Elena",
};
export const Timer = CardButtonTemplate.bind(0);
Timer.args = {
  type: "timer",
  label: "1:30h",
};
export const Info = CardButtonTemplate.bind(0);
Info.args = {
  type: "info",
};
