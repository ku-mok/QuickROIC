import React from "react";
import { AppBar, Paper, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useHistory } from "react-router";

export type HeaderProps = {
  children: React.ReactText;
  tabItems: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }[];
  tabSelected: number;
};
const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const handleTitleClick = () => {
    history.push("/");
  };
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" onClick={handleTitleClick}>
            {props.children}
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <Tabs value={props.tabSelected}>
          {props.tabItems.map((tab) => (
            <Tab
              label={tab.label}
              disabled={tab.disabled}
              onClick={tab.onClick}
            />
          ))}
        </Tabs>
      </Paper>
    </>
  );
};

export default Header;
