import React from "react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

export default {
  title: "DispoDisco/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const HeaderMain = Template.bind({});
HeaderMain.args = {
  ...HeaderStories.Main.args,
};
