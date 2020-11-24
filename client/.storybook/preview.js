import GlobalStyle from "../src/GlobalStyles";

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
