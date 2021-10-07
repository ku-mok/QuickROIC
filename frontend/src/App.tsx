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

const Providers: React.FC = (props) => (
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <SsThemeProvider theme={theme}>{props.children}</SsThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
function App() {
  return (
    <Providers>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new" exact>
          <NewFile />
        </Route>
        <Route path="/table" exact>
          <Table />
        </Route>
        <Route path="/scatter" exact>
          <Scatter />
        </Route>
      </Switch>
    </Providers>
  );
}

export default App;
