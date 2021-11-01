// Providerを渡した上でrenderするためのラッパ
import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider as SsThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import theme from "./theme";

const AllTheProviders: FC = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <SsThemeProvider theme={theme}>{children}</SsThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
