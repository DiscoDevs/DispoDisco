import React from "react";
import Badge from "../components/Badge";

import Card from "../components/Card";
import CardButton from "../components/CardButton";
import CardCustomer from "../components/CardCustomer";
import CardRider from "../components/CardRider";

export default {
  title: "DispoDisco/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;
const CardButtonTemplate = (args) => <CardButton {...args} />;
const CardRiderTemplate = (args) => <CardRider {...args} />;
const CardCustomerTemplate = (args) => <CardCustomer {...args} />;

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

export const RiderBadge = CardButtonTemplate.bind(0);
RiderBadge.args = {
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
  label: "info",
};
export const Remove = CardButtonTemplate.bind(0);
Remove.args = {
  type: "remove",
  label: "X",
};

export const RiderCard = CardRiderTemplate.bind();
RiderCard.args = {
  name: "Darth Vader",
  alias: "Vader",
  dateOfBirth: "1970-01-01",
  phone: "0123/4567890",
  picture: "Enter URL",
  color: "var(--gradient-direct)",
};

export const CustomerCard = CardCustomerTemplate.bind();
CustomerCard.args = {
  name: "Darth Vader",
  company: "The Empire",
  address: "In the Galaxy 5, 00000 Death Star",
  alias: "Emp",
  counter: "0",
  phone: "0123/4567890",
};
