import React from "react";

import { Header, HeaderMenu } from "./Header";

export default {
  title: "DispoDisco/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;
const TemplateMain = (args) => <HeaderMenu {...args} />;

export const MainMenu = Template.bind({});

export const Main = TemplateMain.bind({});

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
