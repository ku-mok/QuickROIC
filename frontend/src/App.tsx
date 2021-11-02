import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as SsThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import theme from "./theme";
import Home from "./page/Home";
import NewFile from "./page/NewFile";
import Table from "./page/Table";
import Scatter from "./page/Scatter";
import Tree from "./page/Tree";
import { ReactElement } from "react";
import Setting from "./page/Setting";

const Providers: React.FC = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <SsThemeProvider theme={theme}>{props.children}</SsThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
const routing: { path: string; component: ReactElement }[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/new",
    component: <NewFile />,
  },
  {
    path: "/table",
    component: <Table />,
  },
  {
    path: "/scatter",
    component: <Scatter />,
  },
  {
    path: "/tree",
    component: <Tree />,
  },
  {
    path: "/setting",
    component: <Setting />,
  },
];
function App() {
  return (
    <Providers>
      <Switch>
        {routing.map((r) => (
          <Route path={r.path} exact>
            {r.component}
          </Route>
        ))}
      </Switch>
    </Providers>
  );
}

export default App;
