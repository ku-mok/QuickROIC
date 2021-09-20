import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as SsThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./page/Home";

const Providers: React.FC = (props) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <SsThemeProvider theme={theme}>{props.children}</SsThemeProvider>
    </MuiThemeProvider>
  </BrowserRouter>
);
function App() {
  return (
    <Providers>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Providers>
  );
}

export default App;
