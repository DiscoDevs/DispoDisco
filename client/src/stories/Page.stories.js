import React from "react";

import { Page } from "./Page";
import { Rides } from "./Rides";

export default {
  title: "DispoDisco/Page",
  component: Rides,
};

const PageTemplate = (args) => <Page {...args} />;
const RidesTemplate = (args) => <Rides {...args} />;

export const MainMenu = PageTemplate.bind();
export const RidesMenu = RidesTemplate.bind();
