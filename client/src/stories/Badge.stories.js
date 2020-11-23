import React from "react";

import { Badge } from "./Badge";

export default {
  title: "DispoDisco/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

// export const BadgeCargo = <Badge type="cargo" />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Standard",
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

// export const Direct = Template.bind({});
// Direct.args = {
//   label: "Direkt",
//   type: "direct",
// };

// export const Kutsche = Template.bind({});
// Kutsche.args = {
//   label: "Kutsche",
//   type: "kutsche",
// };
