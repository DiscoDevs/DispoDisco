import React from "react";

import Input from "../components/Input";
import Todo from "../components/Todo";

export default {
  title: "DispoDisco/Inputs",
  component: "Input",
};

const Template = (args) => <Input {...args} />;
const TodoTemplate = (args) => (
  <Todo {...args}>Schnell weg, wenn geliefert 💨</Todo>
);

export const StandardInput = Template.bind();
StandardInput.args = {
  type: "text",
  placeholder: "default",
};
export const RidePageTodo = TodoTemplate.bind();
RidePageTodo.arg = {
  children: " ",
};
