import React from "react";

import { HeaderMain } from "../components/HeaderMain";
import { HeaderHome } from "../components/HeaderHome";
import { HeaderMini } from "../components/HeaderMini";

export default {
  title: "DispoDisco/Header",
  component: HeaderMain,
};

const HomeTemplate = (args) => <HeaderHome {...args} />;
const MainTemplate = (args) => <HeaderMain {...args} />;
const MiniTemplate = (args) => <HeaderMini {...args} />;

export const HomeHeader = HomeTemplate.bind({});
export const MainHeader = MainTemplate.bind({});
export const MinimizedHeader = MiniTemplate.bind({});
