import React from "react";

import { Header } from "./Header";

export default {
  title: "DispoDisco/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  user: {},
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
