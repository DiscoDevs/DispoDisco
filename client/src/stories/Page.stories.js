import React from "react";
import { MainMenu } from "./MainMenu";
import { Rides } from "./Rides";

export default {
  title: "DispoDisco/Page",
  component: MainMenu,
};

const MainTemplate = (args) => <MainMenu {...args} />;
const RidesTemplate = (args) => <Rides {...args} />;

export const MainMenuPage = MainTemplate.bind({});

export const RidesPage = RidesTemplate.bind({});
