import React from "react";

import { HeaderMain } from "./HeaderMain";
import { HeaderMenu } from "./HeaderMenu";

export default {
  title: "DispoDisco/Header",
  component: HeaderMain,
};

const MenuTemplate = (args) => <HeaderMenu {...args} />;
const MainTemplate = (args) => <HeaderMain {...args} />;

export const HeaderMenus = MenuTemplate.bind({});

export const HeaderMains = MainTemplate.bind({});
