import { SwipeableDrawer, List, SwipeableDrawerProps } from "@material-ui/core";
import React from "react";

export type SideMenuProps = {
  open: boolean;
  children: React.ReactNode;
  onOpen: SwipeableDrawerProps["onOpen"];
  onClose: SwipeableDrawerProps["onClose"];
};

const SideMenu: React.FC<SideMenuProps> = (props) => (
  <SwipeableDrawer
    anchor="left"
    open={props.open}
    onOpen={props.onOpen}
    onClose={props.onClose}
  >
    <List>{props.children}</List>
  </SwipeableDrawer>
);

export default SideMenu;
