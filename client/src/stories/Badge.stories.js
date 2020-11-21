import React from "react";

import { Badge } from "./Badge";

export default {
  title: "DispoDisco/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Badge",
};

export const Cargo = Template.bind({});
Cargo.args = {
  label: "Cargo",
  backgroundColor: "var(--cargo)",
};

export const Direct = Template.bind({});
Direct.args = {
  label: "Direkt",
  backgroundColor: "var(--direct)",
};

export const Kutsche = Template.bind({});
Kutsche.args = {
  label: "Kutsche",
  backgroundColor: "var(--kutsche)",
  color: "var(--black)",
};
