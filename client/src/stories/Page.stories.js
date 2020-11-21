import React from "react";

import { Rides } from "./Rides";

export default {
  title: "DispoDisco/Page",
  component: Rides,
};

const PageTemplate = (args) => <Rides {...args} />;
const RidesTemplate = (args) => <Rides {...args} />;

export const MainMenu = PageTemplate.bind();
export const RidesMenu = RidesTemplate.bind();
