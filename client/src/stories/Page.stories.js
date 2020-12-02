import React from "react";
import MainMenu from "../pages/MainMenu";
import Tours from "../pages/Tours";
import Launch from "../pages/Launch";
import AddTour from "../pages/AddTour";
import TourInfo from "../pages/TourInfo";

export default {
  title: "DispoDisco/Page",
  component: MainMenu,
};

const LaunchTemplate = (args) => <Launch {...args} />;
const MainTemplate = (args) => <MainMenu {...args} />;
const ToursTemplate = (args) => <Tours {...args} />;
const AddRideTemplate = (args) => <AddTour {...args} />;
const RideInfoTemplate = (args) => <TourInfo {...args} />;

export const LaunchPage = LaunchTemplate.bind({});
export const MainMenuPage = MainTemplate.bind({});
export const ToursPage = ToursTemplate.bind({});
export const AddRidePage = AddRideTemplate.bind({});
export const RideInfoPage = RideInfoTemplate.bind({});
