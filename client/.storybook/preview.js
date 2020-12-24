import GlobalStyle from "../src/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <div
        style="
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;"
      >
        <Story />
      </div>
    </>
  ),
];
