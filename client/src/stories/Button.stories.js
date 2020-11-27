import React from "react";
import { Button } from "../components/Button";
import { ButtonPlus } from "../components/ButtonPlus";
export default {
  title: "DispoDisco/Button",
  component: ButtonPlus,
};

const Template = (args) => <Button {...args} />;
const TemplatePlus = (args) => <ButtonPlus {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Menu",
  design: "menu",
};

export const AddRide = Template.bind({});
AddRide.args = {
  label: "Fahrt hinzufügen",
  design: "addRide",
};

export const CTA = Template.bind({});
CTA.args = {
  label: "Lets Fetz",
  design: "cta",
};

export const PlusButton = TemplatePlus.bind({});
ButtonPlus.args = {};
