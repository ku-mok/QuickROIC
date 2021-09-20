import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export type SideMenuItemProps = {
  children: React.ReactText;
  icon: React.ReactElement;
  linkTo: string;
};
const SideMenuItem: React.FC<SideMenuItemProps> = (props) => {
  const history = useHistory();
  const handleItemClick = () => {
    history.push(props.linkTo);
  };
  return (
    <ListItem onClick={handleItemClick}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.children} />
    </ListItem>
  );
};

export default SideMenuItem;
