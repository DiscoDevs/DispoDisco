import React from "react";

import { Card } from "./Card";

export default {
  title: "DispoDisco/Cards",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});

// export const Cargo = Template.bind({});
// Cargo.args = {
//   label: "Cargo",
//   backgroundColor: "var(--cargo)",
// };

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
