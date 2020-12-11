import React from "react";

import Countdown from "../components/Countdown";

export default {
  title: "DispoDisco/Countdown",
  component: Countdown,
};

const Template = (args) => <Countdown {...args} />;

export const Timer = Template.bind();
Timer.args = {
  finish: "2020-12-24T18:00",
};
