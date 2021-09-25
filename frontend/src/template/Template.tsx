import Header from "../organisms/Header";
import styled from "styled-components";

const ContentContainer = styled.div`
  margin-top: 1ex;
  margin-left: 1vw;
  margin-right: 3vw;
`;
export type TemplateProps = {
  children: React.ReactNode;
  tabItems: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }[];
  tabSelected: number;
};
const Template: React.FC<TemplateProps> = (props) => {
  return (
    <>
      <Header tabItems={props.tabItems} tabSelected={props.tabSelected}>
        QuickRoic
      </Header>
      <ContentContainer>{props.children}</ContentContainer>
    </>
  );
};

export default Template;
