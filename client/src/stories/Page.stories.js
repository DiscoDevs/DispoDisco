import React from "react";
import { HeaderMenu } from "./HeaderMenu";

import { Page } from "./Page";

export default {
  title: "DispoDisco/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const HeaderMain = Template.bind({});
HeaderMain.args = {
  ...HeaderMenu.Main.args,
};
