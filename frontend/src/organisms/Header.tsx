import React from "react";
import {
  AppBar,
  IconButton,
  IconButtonProps,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Menu } from "@material-ui/icons";
import { useHistory } from "react-router";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
export type HeaderProps = {
  handleIconButtonClick: IconButtonProps["onClick"];
  children: React.ReactText;
};
const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const handleTitleClick = () => {
    history.push("/");
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={props.handleIconButtonClick}
            edge="start"
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" onClick={handleTitleClick}>
            {props.children}
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
