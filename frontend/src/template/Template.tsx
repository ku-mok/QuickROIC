import { useState } from "react";
import Header from "../organisms/Header";
import SideMenu from "../organisms/SideMenu";
import SideMenuItem from "../molecules/SideMenuItem";
import { AddCircle } from "@material-ui/icons";
import styled from "styled-components";

const ContentContainer = styled.div`
  margin-top: 1ex;
  margin-left: 1vw;
`;
const Template: React.FC<{ children: React.ReactNode }> = (props) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const handleSideMenuOpen = () => {
    setSideMenuOpen(true);
  };
  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
  };
  return (
    <>
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
      <ContentContainer>{props.children}</ContentContainer>
    </>
  );
};

export default Template;
