import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as SsThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./page/Home";
import Header from "./organisms/Header";
import { useState } from "react";
import SideMenu from "./organisms/SideMenu";
import SideMenuItem from "./molecules/SideMenuItem";
import { AddCircle } from "@material-ui/icons";

const Providers: React.FC = (props) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <SsThemeProvider theme={theme}>{props.children}</SsThemeProvider>
    </MuiThemeProvider>
  </BrowserRouter>
);
function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const handleSideMenuOpen = () => {
    setSideMenuOpen(true);
  };
  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
  };
  return (
    <Providers>
      <Header handleIconButtonClick={handleSideMenuOpen}>QuickRoic</Header>
      <SideMenu
        open={sideMenuOpen}
        onOpen={handleSideMenuOpen}
        onClose={handleSideMenuClose}
      >
        <SideMenuItem icon={<AddCircle />} linkTo="/new">
          新規分析
        </SideMenuItem>
      </SideMenu>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Providers>
  );
}

export default App;
