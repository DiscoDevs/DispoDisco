import React from "react";

import { HeaderMain } from "../components/HeaderMain";
<<<<<<< HEAD
import { HeaderHome } from "../components/HeaderHome";
import { Header } from "../components/Header";
=======
import { HeaderMenu } from "../components/HeaderMenu";
import { HeaderMini } from "../components/HeaderMini";
>>>>>>> develop

export default {
  title: "DispoDisco/Header",
  component: HeaderMain,
};

const HomeTemplate = (args) => <HeaderHome {...args} />;
const MainTemplate = (args) => <HeaderMain {...args} />;
<<<<<<< HEAD
const HeaderTemplate = (args) => <Header {...args} />;
const HeaderTextTemplate = (args) => <Header {...args} />;
=======
const MiniTemplate = (args) => <HeaderMini {...args} />;
>>>>>>> develop

export const DefaultHeader = HeaderTemplate.bind({});
export const HeaderWithHeading = HeaderTextTemplate.bind({});
export const MainMenuHeader = MainTemplate.bind({});
export const HomeHeader = HomeTemplate.bind({});

<<<<<<< HEAD
HeaderWithHeading.args = {
  title: "Überschrift",
};
=======
export const HeaderMains = MainTemplate.bind({});
export const HeaderMinimized = MiniTemplate.bind({});
>>>>>>> develop
