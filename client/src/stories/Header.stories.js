import React from "react";

import { HeaderMain } from "../components/HeaderMain";
import { HeaderMenu } from "../components/HeaderMenu";
import { HeaderMini } from "../components/HeaderMini";

export default {
  title: "DispoDisco/Header",
  component: HeaderMain,
};

const MenuTemplate = (args) => <HeaderMenu {...args} />;
const MainTemplate = (args) => <HeaderMain {...args} />;
const MiniTemplate = (args) => <HeaderMini {...args} />;

export const HeaderMenus = MenuTemplate.bind({});

export const HeaderMains = MainTemplate.bind({});
export const HeaderMinimized = MiniTemplate.bind({});
