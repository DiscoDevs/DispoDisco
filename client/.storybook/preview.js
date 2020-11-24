import GlobalStyle from "../src/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <div className="sbWrapper">
        <Story />
      </div>
    </>
  ),
];
