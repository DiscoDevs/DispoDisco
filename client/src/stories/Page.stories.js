import React from "react";
import MainMenu from "../pages/MainMenu";
import Rides from "../pages/Rides";
import Launch from "../pages/Launch";
import AddRide from "../pages/AddRide";

export default {
  title: "DispoDisco/Page",
  component: MainMenu,
};

const LaunchTemplate = (args) => <Launch {...args} />;
const MainTemplate = (args) => <MainMenu {...args} />;
const RidesTemplate = (args) => <Rides {...args} />;
const AddRideTemplate = (args) => <AddRide {...args} />;

export const LaunchPage = LaunchTemplate.bind({});
export const MainMenuPage = MainTemplate.bind({});
export const RidesPage = RidesTemplate.bind({});
export const AddRidePage = AddRideTemplate.bind({});
