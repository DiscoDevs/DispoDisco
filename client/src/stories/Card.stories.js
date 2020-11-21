import React from "react";
import { Cargo } from "./Badge.stories";

import { Card } from "./Card";

export default {
  title: "DispoDisco/Cards",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const NormalRide = Template.bind();
NormalRide.args = {
  labels: (
    <>
      <Cargo type="cargo" label="5-25kg" />
      <Cargo type="direct" label="Direct" />
      <Cargo type="kutsche" label="Kutsche" />
    </>
  ),
};
export const DayRide = Template.bind();
DayRide.args = {
  type: "dayRide",
  labels: (
    <>
      <Cargo type="cargo" label="5-25kg" />
      <Cargo type="direct" label="Direct" />
      <Cargo type="kutsche" label="Kutsche" />
    </>
  ),
};
export const DirectRide = Template.bind();
DirectRide.args = {
  type: "directRide",
  labels: (
    <>
      <Cargo type="cargo" label="5-25kg" />
      <Cargo type="direct" label="Direct" />
      <Cargo type="kutsche" label="Kutsche" />
    </>
  ),
};
export const ConcurrentRide = Template.bind();
ConcurrentRide.args = {
  type: "concurrentRide",
};
// export const Direct = Template.bind({});
// Direct.args = {
//   label: "Direkt",
//   backgroundColor: "var(--direct)",
// };

// export const Kutsche = Template.bind({});
// Kutsche.args = {
//   label: "Kutsche",
//   backgroundColor: "var(--kutsche)",
//   color: "var(--black)",
// };
