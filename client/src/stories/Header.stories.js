import React from "react";

import HeaderMain from "../components/HeaderMain";
import HeaderHome from "../components/HeaderHome";
import Header from "../components/Header";

export default {
  title: "DispoDisco/Header",
  component: HeaderMain,
};

const HomeTemplate = (args) => <HeaderHome {...args} />;
const MainTemplate = (args) => <HeaderMain {...args} />;
const HeaderTemplate = (args) => <Header {...args} />;
const HeaderTextTemplate = (args) => <Header {...args} />;

export const DefaultHeader = HeaderTemplate.bind({});
export const HeaderWithHeading = HeaderTextTemplate.bind({});
export const MainMenuHeader = MainTemplate.bind({});
export const HomeHeader = HomeTemplate.bind({});

HeaderWithHeading.args = {
  title: "Überschrift",
};
