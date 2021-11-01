import Header from "../organisms/Header";
import styled from "styled-components";
import { ApolloError } from "@apollo/client";
import Loading from "../atom/Loading";
import ErrorSnack from "../atom/ErrorSnack";

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
  loading?: boolean;
  error?: ApolloError;
};
const Template: React.FC<TemplateProps> = (props) => {
  return (
    <>
      {props.loading && <Loading />}
      {props.error && <ErrorSnack error={props.error} />}
      <Header tabItems={props.tabItems} tabSelected={props.tabSelected}>
        QuickRoic
      </Header>
      <ContentContainer>{props.children}</ContentContainer>
    </>
  );
};

export default Template;
