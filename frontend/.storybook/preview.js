import React from "react";
import { ThemeProvider as SsThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import theme from "../src/theme";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <SsThemeProvider theme={theme}>
          <Story />
        </SsThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  ),
];
