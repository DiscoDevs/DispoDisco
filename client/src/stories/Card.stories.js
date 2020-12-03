import React from "react";
import Badge from "../components/Badge";

import Card from "../components/Card";
import CardButton from "../components/CardButton";

export default {
  title: "DispoDisco/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;
const CardButtonTemplate = (args) => <CardButton {...args} />;

export const NormalRide = Template.bind();
NormalRide.args = {
  type: "normal",
  start: "Alex-Dental",
  dest: "Anzag",
  rider: "Lazer",
  labels: (
    <>
      <Badge type="cargoS" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const DayRide = Template.bind();
DayRide.args = {
  type: "dayRide",
  start: "Rewe",
  dest: "L. Machens",
  rider: "Philipp G",
  labels: (
    <>
      <Badge type="cargoM" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const DirectRide = Template.bind();
DirectRide.args = {
  type: "direct",
  start: "neuefische",
  dest: "IT-Firma",
  rider: "Elena",
  labels: (
    <>
      <Badge type="cargoL" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const OnTimeRide = Template.bind();
OnTimeRide.args = {
  type: "dayRide",
  start: "Rewe",
  dest: "L. Machens",
  rider: "Philipp G",
  labels: (
    <>
      <Badge type="cargoL" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
};
export const ConcurrentRide = Template.bind();
ConcurrentRide.args = {
  type: "concurrentRide",
  start: "Rathaus",
};
export const RideWithSettings = Template.bind();
RideWithSettings.args = {
  type: "normal",
  start: "Alex-Dental",
  dest: "Anzag",
  rider: "Lazer",
  settings: true,
  labels: (
    <>
      <Badge type="cargoS" label="5-25kg" />
      <Badge type="direct" label="Direct" />
      <Badge type="carriage" label="Kutsche" />
    </>
  ),
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
