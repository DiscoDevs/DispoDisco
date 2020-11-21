import React from "react";

import { Header } from "./HeaderMain";
import { HeaderMenu } from "./HeaderMenu";

export default {
  title: "DispoDisco/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;
const TemplateMain = (args) => <HeaderMenu {...args} />;

export const HeaderMenus = Template.bind({});

export const HeaderMain = TemplateMain.bind({});

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
